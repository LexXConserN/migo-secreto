// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue añadido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("data-index", index);
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const copia = [...amigos];
    copia.sort(() => Math.random() - 0.5); // Mezcla aleatoria

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${copia[index]}`;
        resultado.appendChild(li);
    });
}
