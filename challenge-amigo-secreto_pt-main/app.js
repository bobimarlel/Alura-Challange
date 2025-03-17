//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    
    let item = document.createElement("li");
    item.textContent = nome;
    listaAmigos.appendChild(item);
    
    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let itemResultado = document.createElement("li");
    itemResultado.textContent = `O amigo secreto é: ${amigoSorteado}!`;
    resultado.appendChild(itemResultado);
}
