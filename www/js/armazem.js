/* Armazém: bancos de questões do aluno no IndexedDB, que comporta centenas de MB (o localStorage
   tem ~5 MB). Sem IndexedDB (navegador antigo ou bloqueado), cai para o localStorage. */
(function (root) {
  'use strict';
  var NOME = 'gabarito', LOJA = 'kv', RESERVA = 'gabarito.bancos';
  var conexao = null;

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
    gravar: function (chave, valor) {
      return transacao('readwrite', function (s) { return s.put(valor, chave); }).catch(function () {
        Armazem.usandoReserva = true;
        root.localStorage.setItem(RESERVA + '.' + chave, JSON.stringify(valor)); // lança se não couber
      });
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
