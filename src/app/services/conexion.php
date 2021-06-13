<?php

$servername = "";
$database = "";
$username = "";
$password = "";
// Creamos la conexion 
$conn = mysqli_connect($servername, $username, $password, $database);
// Comprobamos si es correcta 
if (!$conn) {
    die("Conexion fallida: " . mysqli_connect_error());
}
echo "Conexion completada con exito";
mysqli_close($conn);

?>