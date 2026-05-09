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
    $('#grupo-observacao').remove();
});
$('#btn-observacao').on('click', function(){
    if($('#observacao').length === 0){
        $('#area-observacao').append(`
            <div class="field-group" id="grupo-observacao">
                <label for="observacao">Observação</label>
                <textarea id="observacao" rows="3" placeholder="Digite a observação..."></textarea>
            </div>
        `);
    }
    else{
        $('#grupo-observacao').remove();
    }
});
$(document).on('click', '.btn-delete', function(){
    let id = $(this).data('id');
    ExcluirTarefa(id);
    RenderizaTabela();
    console.log(id);
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
                            <th>Observações</th>
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

                <td>${item.observacao}</td>

                <td class="action-buttons">
                    <button class="btn-edit" data-id="${item.Id}">Editar</button>
                    <button class="btn-delete" data-id="${item.Id}">Excluir</button>
                </td>

            </tr>
        
        `);

    });
}
