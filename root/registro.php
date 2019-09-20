<?php

$fname = $_POST['nombre'];  
$lname = $_POST['apellido'];
$uname = $_POST['usuario'];  
$tuser = $_POST['tipousuario'];

if ($fname != "" && $lname != ""){
    $myObj->nombre = $fname;
    $myObj->apellido = $lname;
    $myObj->usuario = $uname;
    $myObj->tipoUsuario = $tuser;

    $myJSON = json_encode($myObj);

    echo $myJSON;
    
//    echo 1;
}else{
    echo "Error";
}

?>