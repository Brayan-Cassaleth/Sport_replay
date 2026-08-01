function datos(){
    let usuario = document.getElementById("Usuario").value;
    let clave = document.getElementById("Clave").value;

    if(usuario == "admin"){
        if(clave == "admin"){
            alert("Esta cancha cuenta con un sistema de videograbación administrado por Sport Replay. Al ingresar y participar en los partidos, los usuarios aceptan que las grabaciones podrán utilizarse para permitir la visualización, descarga y análisis de sus encuentros, conforme a esta Política de Privacidad y a los Términos y Condiciones del servicio.")
            window.location.href = "carga_videos.html"
        }else{
            alert("Clave Incrrecta")
        }
    }else{
        alert("El usuario no existe...")
    }
}