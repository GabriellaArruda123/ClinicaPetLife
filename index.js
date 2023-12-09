//LINGUAGEM DE PROGRAMAÇÃO
var elementosDuvida = document.querySelectorAll('.duvida');
//querySelectorAll selecionar mais de um elemento

elementosDuvida.forEach(function(duvida){//uma função que vai rodar para cada elemento
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa'); //classList uma lista das classes / toggle fazer troca, colocar a class se ela não existir e tirar se ela existir 
    })
})