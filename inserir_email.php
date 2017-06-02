<?php

include('conectar.php');

$email = $_POST['email'];

if (strpos($email, '@') !== false) {

    $sql = "INSERT INTO `emails`(`email`) VALUES ('".$email."')";

    if($conn->query($sql) === true ){

    }else{
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    header("Location: {$_SERVER['HTTP_REFERER']}");
}else{
    echo "Not a valid email";
    $erro = "Não é um email válido";
    header("Location: {$_SERVER['HTTP_REFERER']}");
}

exit;

?>