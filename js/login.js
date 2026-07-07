function datos(){
    let usuario = document.getElementById("Usuario").value;
    let clave = document.getElementById("Clave").value;

    if(usuario == "admin"){
        if(clave == "admin"){
            window.location.href = "carga_videos.html"
        }else{
            alert("Clave Incrrecta")
        }
    }else{
        alert("El usuario no existe...")
    }
}