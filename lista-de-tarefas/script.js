$(document).ready(function(){
    const formularioTarefa = $("#tarefa");
    const listaTarefa = $("#lista-tarefa");

    formularioTarefa.submit(function (event){
        event.preventDefault();

        const nomeTarefa = $("#nome-tarefa").val();

        if(nomeTarefa.trim() === ""){
            alert("Por favor insira o nome da tarefa");
            return;
        }

        const listItem = $("<li></li>");
        const bulletPoint = $("<span class='bullet'>&#8226;</span>");
        const taskText = $("<span></span>").text(nomeTarefa);

        listItem.append(bulletPoint, taskText);

        listItem.click(function(){
            $(this).toggleClass("completed");
        });

        listaTarefa.append(listItem);

        $("#nome-tarefa").val("");
    });
});
