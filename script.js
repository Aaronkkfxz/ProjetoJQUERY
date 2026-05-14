let tarefa = [];

function criaTarefa() {
  var tituloId = document.getElementById("titulo").value;
  var descricaoId = document.getElementById("descricao").value;
  var prioridadeId = document.getElementById("prioridade").value;
  var datalimiteId = document.getElementById("data-limite").value;
  var statusId = document.getElementById("status").value;
  var observacaoId = "";

  if (document.getElementById("observacao")) {
    observacaoId = document.getElementById("observacao").value;
  }

  if (tituloId === "") {
    return null;
  }
  let novaTarefa = {
    Id: Date.now(),
    titulo: tituloId,
    descricao: descricaoId,
    prioridade: prioridadeId,
    dataLimite: datalimiteId,
    status: statusId,
    observacao: observacaoId,
  };
  tarefa.push(novaTarefa);
  salvarTarefas();
  return novaTarefa;
}

function excluirTarefa(id) {
  tarefa = tarefa.filter(function (item) {
    return item.Id != id;
  });
  salvarTarefas();
}
function atualizarTarefa(id, dadosAtualizados) {
  tarefa = tarefa.map(function (item) {
    if (item.Id == id) {
      item.titulo = dadosAtualizados.titulo;
      item.descricao = dadosAtualizados.descricao;
      item.prioridade = dadosAtualizados.prioridade;
      item.dataLimite = dadosAtualizados.dataLimite;
      item.status = dadosAtualizados.status;
      item.observacao = dadosAtualizados.observacao;
    }

    return item;
  });
  salvarTarefas();
}
function filtrarTarefas(status, prioridade) {
  return tarefa.filter(function (item) {
    let filtroStatus = true;
    let filtroPrioridade = true;

    if (status !== "") {
      filtroStatus = item.status == status;
    }

    if (prioridade !== "") {
      filtroPrioridade = item.prioridade == prioridade;
    }

    return filtroStatus && filtroPrioridade;
  });
}
function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefa));
}
function carregarTarefas() {
  let tarefasSalvas = localStorage.getItem("tarefas");

  if (tarefasSalvas) {
    tarefa = JSON.parse(tarefasSalvas);
  }
}
