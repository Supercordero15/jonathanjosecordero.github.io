let miImage = document.querySelector('img');
miImage.onclick = function () {
 let miSrc = miImage.getAttribute('src');
 if (miSrc === 'images/NBA.jpg') {
 miImage.setAttribute('src','images/NBA2.jpg');
 } else {
 miImage.setAttribute('src', 'images/NBA.jpg');
 }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
    estableceNombreUsuario();
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'NBADÍSTICAS: Todas las estadísticas de la NBA, ¿estás listo para estar al tanto de tu equipo y jugador favorito ' + miNombre + '?';
    }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
   else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'NBADÍSTICAS: Todas las estadísticas de la NBA, ¿estás listo para estar al tanto de tu equipo y jugador favorito ' + nombreAlmacenado + '?';
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}