<?php

$conexion = new mysqli("localhost","root","","sport_replay_db");

$nombre_completo = $_POST["nombre"];
$correo = $_POST["correo"];
$usuario = $_POST["usuario"];
$clave = $_POST["clave"];
$confirmar_clave = $_POST["confirmar_clave"];

$sql = "INSERT INTO usuarios (nombre, correo, usuario, clave, confirmar_clave) VALUES ('$nombre_completo', '$correo','$usuario','$clave','$confirmar_clave')";

if($conexion -> query($sql) === TRUE){
    echo "<script>
    alert('Datos guardados correctamente');</script>";
    header("Location: ../pages/solicitud_registro.html");
    exit();

}else{
    echo "Se presento un error";
}

$conexion -> close();
?>