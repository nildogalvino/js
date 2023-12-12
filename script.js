var area = document.getElementById("area");

function entrar(){
    var nome = prompt("Digite o seu nome");

    if(nome === '' || nome === null){
        alert("Ops, algo deu errado!!")
        area.innerHTML = "Clique no botão para acessar..."
    }else{     
    area.innerHTML = "Bem vindo " + nome + " ";

    let botaSair = document.createElement("button");
    botaSair.innerText = "Sair da conta";
    botaSair.onclick = sair;
    area.appendChild(botaSair);
    }
}

function sair(){
    alert("Ate mais!");
    area.innerHTML = "Você saiu";
}

function mediaAluno(nota1, nota2){

    var media = (nota1 + nota2) / 2;

    if( media >= 7){
      console.log("Aluno aprovado coma média: " + media)
    }else if(media < 7){
        console.log("Aluno reprovado com a média: " + media)
    }
}

function aluno (nome, curso){

    var mensagem = 'Seja bem vindo ' + nome + ' ao curso de ' + curso;

    console.log(mensagem);
}