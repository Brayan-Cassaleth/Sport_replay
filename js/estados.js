const estado_usuario = document.getElementById("estado");
const boton = document.getElementById("boton_solicitar")

if (estado_usuario.textContent === "Suscribirse"){
    fondo_estado.style.background = "red";
    boton.textContent = "Suscribirse";

}else if (estado_usuario.textContent === "1 partido"){
    fondo_estado.style.background = "gray";
    boton.textContent = "Solicitar el video";
}