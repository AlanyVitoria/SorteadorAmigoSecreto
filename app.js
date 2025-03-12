let inputAmigos = document.querySelector("#amigos");
let botaoAdicionar = document.querySelector("#button-add");
let listaHtml = documento.querySelector("#listaAmigos")
let listaDeAmigos=[];

function adicionarAmigo() {
    if (nome === "") {
        alert("Por favor, adicione um nome!");
    } else {
        listaDeAmigos.push(nome);
        atualizarLista();
        inputAmigos.value = "";
    }
}

botaoAdicionar.onclick = adicionarAmigo