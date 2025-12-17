<?php
if ($_POST) {
    $datos = $_POST['datos'] ?? []; 
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);

    if (!$email || empty($datos)) {
        die("Datos inválidos");
    }

    $mensaje = "Datos recibidos:\n\n";
    foreach ($datos as $i => $valor) {
        $mensaje .= "- Ítem " . ($i + 1) . ": $valor\n";
    }

    $asunto = "Tus datos enviados";
    $cabeceras = "From: no-responder@tudominio.com\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($email, $asunto, $mensaje, $cabeceras)) {
        echo "Correo enviado correctamente.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>