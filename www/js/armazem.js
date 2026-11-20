/* Armazém: bancos de questões do aluno no IndexedDB, que comporta centenas de MB (o localStorage
   tem ~5 MB). Sem IndexedDB (navegador antigo ou bloqueado), cai para o localStorage. */
(function (root) {
  'use strict';
  var NOME = 'gabarito', LOJA = 'kv', RESERVA = 'gabarito.bancos';
  var conexao = null, ouvintes = [], canal = null;
  try { canal = root.BroadcastChannel ? new root.BroadcastChannel('helma-armazem') : null; } catch (e) { canal = null; }
  if (canal) canal.onmessage = function (e) { ouvintes.forEach(function (fn) { fn(e.data); }); };
  function avisar(chave) { if (canal) canal.postMessage(chave); }

  function abrir() {
    if (conexao) return Promise.resolve(conexao);
    return new Promise(function (ok, falha) {
      if (!root.indexedDB) return falha(new Error('sem IndexedDB'));
      var r = root.indexedDB.open(NOME, 1);
      r.onupgradeneeded = function () { r.result.createObjectStore(LOJA); };
      r.onsuccess = function () { conexao = r.result; ok(conexao); };
      r.onerror = function () { falha(r.error); };
      r.onblocked = function () { falha(new Error('IndexedDB bloqueado por outra aba')); };
    });
  }
  function transacao(modo, fn) {
    return abrir().then(function (db) {
      return new Promise(function (ok, falha) {
        var t = db.transaction(LOJA, modo), pedido = fn(t.objectStore(LOJA));
        t.oncomplete = function () { ok(pedido && pedido.result); };
        t.onerror = t.onabort = function () { falha(t.error || new Error('falha no IndexedDB')); };
      });
    });
  }

  var Armazem = {
    usandoReserva: false,
    ler: function (chave) {
      return transacao('readonly', function (s) { return s.get(chave); }).catch(function () {
        Armazem.usandoReserva = true;
        try { return JSON.parse(root.localStorage.getItem(RESERVA + '.' + chave) || 'null'); } catch (e) { return null; }
      });
    },
    // semReserva: arquivos (Blob) não cabem no localStorage; sem IndexedDB, a gravação falha em vez de gravar um objeto vazio.
    gravar: function (chave, valor, semReserva) {
      return transacao('readwrite', function (s) { return s.put(valor, chave); }).catch(function (e) {
        if (semReserva) throw e;
        Armazem.usandoReserva = true;
        root.localStorage.setItem(RESERVA + '.' + chave, JSON.stringify(valor)); // lança se não couber
      });
    },
    /* Lê, transforma e grava na mesma transação: duas abas mexendo na mesma lista (estante, documentos) não se sobrescrevem,
       porque o IndexedDB serializa as transações de escrita. fn recebe o valor atual e devolve o novo. Sem reserva. */
    atualizar: function (chave, fn) {
      return abrir().then(function (db) {
        return new Promise(function (ok, falha) {
          var t = db.transaction(LOJA, 'readwrite'), s = t.objectStore(LOJA), novo, g = s.get(chave);
          g.onsuccess = function () {
            try { novo = fn(g.result); } catch (e) { t.abort(); falha(e); return; }
            s.put(novo, chave);
          };
          t.oncomplete = function () { avisar(chave); ok(novo); };
          t.onerror = t.onabort = function () { falha(t.error || new Error('falha no IndexedDB')); };
        });
      });
    },
    // Responde se o aparelho consegue guardar arquivos (falso em janela anônima de alguns navegadores).
    disponivel: function () { return abrir().then(function () { return true; }, function () { return false; }); },
    // Outra aba mudou esta chave: fn(chave).
    aoMudar: function (fn) { ouvintes.push(fn); },
    // Apaga tudo o que o app guardou no IndexedDB (livros, documentos, bancos). Sem IndexedDB, não há o que apagar.
    limparTudo: function () { return transacao('readwrite', function (s) { return s.clear(); }).then(function () { avisar('*'); }, function () { /* sem IndexedDB */ }); }, // '*': todas as chaves mudaram, as outras abas devem reler
    remover: function (chave) {
      return transacao('readwrite', function (s) { return s.delete(chave); }).then(function () { avisar(chave); }, function () { /* nada a remover */ });
    },
    // Pede ao navegador para não apagar os dados quando faltar espaço no aparelho.
    persistir: function () {
      try { if (navigator.storage && navigator.storage.persist) return navigator.storage.persist(); } catch (e) { /* sem suporte */ }
      return Promise.resolve(false);
    },
    espaco: function () {
      try { if (navigator.storage && navigator.storage.estimate) return navigator.storage.estimate(); } catch (e) { /* sem suporte */ }
      return Promise.resolve(null);
    }
  };
  root.Armazem = Armazem;
})(this);
