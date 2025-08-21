// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
nombreAmigo = '';

function agregarAmigo() {
    nombreAmigo = (document.getElementById('amigo').value).trim();

    //Validamos que no sea un espacio en blanco

    if (nombreAmigo === ''){
        alert('Ingresa un nombre')
        return;
    } else {
        amigos.push(nombreAmigo);
    }

    limpiarInput();
    mostrarListaDeAmigos();

    return;
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

//Mostrar lista de amigos en la pantalla 

function mostrarListaDeAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');

    // Vaciar lista
    listaDeAmigos.innerHTML = '';

    for (let i = 0 ; i<amigos.length; i++){
        let nombre = amigos[i];
        let li = document.createElement('li');
        li.textContent = nombre;
        listaDeAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    //Validar que la lista no este vacia.
    if (amigos.length < 2) {
        alert("Ingresa al menos dos nombres para sortear")
        return;
    } else {
        let i = Math.floor(Math.random()*amigos.length);

        let amigoSorteado = amigos[i];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    }
}
