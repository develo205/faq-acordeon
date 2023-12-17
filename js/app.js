// Archivo: app.js

function toggleText(faqId) {
    const pregunta = document.getElementById(faqId);
    const respuesta = document.getElementById(`respuesta-${faqId}`);
    const iconoBoton = document.querySelector(`#${faqId} .toggle-btn img`);

    respuesta.classList.toggle("mostrar-texto");
    pregunta.classList.toggle("activa");

    // Cambia el ícono del botón basado en la presencia de la clase "mostrar-texto"
    const mostrarTexto = respuesta.classList.contains("mostrar-texto");

    if (mostrarTexto) {
        iconoBoton.src = "/images/icon-minus.svg";
    } else {
        iconoBoton.src = "/images/icon-plus.svg";
    }
}
