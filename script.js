let tarefa = [];

function CriaTarefa(){
    var tituloId = document.getElementById('titulo').value;
    var descricaoId = document.getElementById('descricao').value;
    var prioridadeId = document.getElementById('titulo').value;
    var datalimiteId = document.getElementById('titulo').value;
    var statusId = document.getElementById('titulo').value;

    if(TituloId === ''){
        return NULL;
    }
    else{
         let novaTarefa = {
        titulo : tituloId,
        descricao: descricaoId,
        prioridade: prioridadeId,
        dataLimite: datalimiteId,
        status: statusId
    }
    }
    tarefas.push(novaTarefa);
    return novaTarefa;
}