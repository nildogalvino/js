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