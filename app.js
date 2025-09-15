// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    // Validación: no permitir nombres vacíos
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    // Agregar el nombre al array
    amigos.push(nombre);
    // Actualizar la lista visual de amigos
    actualizarLista();
    Limpiaramigo();
}
function Limpiaramigo() {
    // Limpiar el nombre
    const input = document.getElementById("amigo");
    input.value = "";
    // Volver a enfocarlo
    input.focus();
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo de un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];

    // Mostrar el resultado en el ul con id="resultado"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados previos
    const li = document.createElement("li");
    li.textContent = `¡El amigo secreto sorteado es : ${ganador}!`;
    resultado.appendChild(li);
}

function reiniciarJuego() {
    // Vaciar el array de amigos
    amigos = [];
    Limpiarjuego();
   
}


function Limpiarjuego() {
    // Limpiar la lista de amigos en pantalla
    document.getElementById("listaAmigos").innerHTML = "";
    // Limpiar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "";
    // Limpiar y enfocar el 
    Limpiaramigo();

    
}

