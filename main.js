$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault();

        let novoItem = $('#nova-tarefa').val();

        if (novoItem) {
            $('#lista-tarefas').append('<li>' + novoItem + '</li>');
            $('#nova-tarefa').val('');
        }

    })

        $('#lista-tarefas').on('click','li',function(){
            $(this).toggleClass('concluido');
        })
                });

