$(document).ready(function(){
$('#form-tarefa').on('submit', function(e){
    e.preventDefault();

    let tarefaCriada = CriaTarefa();

    if(tarefaCriada == null){
        $('#erro-titulo').text('O título é obrigatório');

        return
    }

    $('#erro-titulo').text('');

    RenderizaTabela();

    this.reset();
});
});
function RenderizaTabela(){
    if($('#tabela-tarefas').length === 0){

        $('#container-tabela').append(`
        
            <div class="table-wrapper">

                <table id="tabela-tarefas">

                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descrição</th>
                            <th>Prioridade</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>

                </table>

            </div>
        
        `);
    }

    $('#tabela-tarefas tbody').html('');

    tarefa.forEach(function(item){

        $('#tabela-tarefas tbody').append(`
        
            <tr>

                <td>${item.titulo}</td>

                <td>${item.descricao}</td>

                <td>${item.prioridade}</td>

                <td>${item.dataLimite}</td>

                <td>${item.status}</td>

                <td class="action-buttons">
                    <button class="btn-edit">Editar</button>
                    <button class="btn-delete">Excluir</button>
                </td>

            </tr>
        
        `);

    });
}