let inputAmigos = document.querySelector("#amigos");
let botaoAdicionar = document.querySelector("#button-add");
let listaHtml = documento.querySelector("#listaAmigos")
let listaDeAmigos=[];

function adicionarAmigo() {
    if (nome === "") {
        alert("Por favor, adicione um nome!");
        return;
    }else{
    listaDeAmigos.push(nome);
    }
    listaHtml.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaHtml.appendChild(li);
    }

    inputAmigos.value = "";
}
botaoAdicionar.onclick = adicionarAmigo;

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = "O amigo sorteado é: " + amigoSorteado;
}

