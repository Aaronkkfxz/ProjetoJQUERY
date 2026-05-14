$(document).ready(function(){
$('#form-tarefa').on('submit', function(e){
    e.preventDefault();

    let idEdicao = $('#tarefa-id').val();

    if(idEdicao){

        let dadosAtualizados = {

            titulo : $('#titulo').val(),
            descricao : $('#descricao').val(),
            prioridade : $('#prioridade').val(),
            dataLimite : $('#data-limite').val(),
            status : $('#status').val(),
            observacao : $('#observacao').length ? $('#observacao').val() : ''

        };

        AtualizarTarefa(idEdicao, dadosAtualizados);

    }
    else{

        let tarefaCriada = CriaTarefa();

        if(tarefaCriada == null){

            $('#erro-titulo').text('O título é obrigatório');

            return;

        }

    }

    RenderizaTabela();

    this.reset();
    $('#tarefa-id').val('');
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
$(document).on('click', '.btn-edit', function(){

    let id = $(this).data('id');

    let tarefaSelecionada = tarefa.find(function(item){
        return item.Id == id;
    });

    $('#titulo').val(tarefaSelecionada.titulo);
    $('#descricao').val(tarefaSelecionada.descricao);
    $('#prioridade').val(tarefaSelecionada.prioridade);
    $('#data-limite').val(tarefaSelecionada.dataLimite);
    $('#status').val(tarefaSelecionada.status);
    

    $('#tarefa-id').val(tarefaSelecionada.Id);

    if(tarefaSelecionada.observacao){

        if($('#observacao').length === 0){

            $('#area-observacao').append(`
            
                <div class="field-group" id="grupo-observacao">

                    <label for="observacao">Observação</label>

                    <textarea 
                        id="observacao"
                        rows="3"
                        placeholder="Digite a observação..."
                    ></textarea>

                </div>
            
            `);

        }

        $('#observacao').val(tarefaSelecionada.observacao);

    }
});
$(document).on('dblclick', 'tr', function(){

    let id = $(this).data('id');

    $('.btn-edit[data-id="' + id + '"]').click();

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
        
            <tr data-id="${item.Id}">

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
