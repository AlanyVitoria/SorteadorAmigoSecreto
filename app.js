let inputAmigos = document.querySelector("#amigo");
let botaoAdicionar = document.querySelector(".button-add");
let listaHtml = document.querySelector("#listaAmigos");
let listaDeAmigos = [];

function adicionarAmigo() {
    let nome = inputAmigos.value.trim();

    if (nome === "") {
        alert("Por favor, adicione um nome!");
        return;
    } else {
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

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "O amigo sorteado é: " + amigoSorteado;
}
