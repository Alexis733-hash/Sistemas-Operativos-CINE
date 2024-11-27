
function mostrarNotas(hora, precio) {
    const infoDiv = document.getElementById('info');
    const horaElement = document.getElementById('hora');
    const precioElement = document.getElementById('precio');

    horaElement.textContent = "Hora: " + hora;
    precioElement.textContent = "Precio: BOB" + precio;

    infoDiv.style.display = "block";
}

document.getElementById('btn1').addEventListener('click', function() {
    mostrarNotas('02:00 PM', '10.00');  
});

document.getElementById('btn2').addEventListener('click', function() {
    mostrarNotas('3:00 PM', '15.00');  
});


