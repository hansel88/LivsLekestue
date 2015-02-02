
<?php 
// Sjekker om alt er fylt ut som det skal
if(!isset($_POST['mailInput'], $_POST['nameInput'], $_POST['phoneInput'], $_POST['messageInput'])) {
    http_response_code(400); // 400 bad request
    exit();
}
else {
    $to = "hptest@mailinator.com"; // gå til mailinator.com og type inn hptest@mailinator.com for å se mail

    $from = $_POST['mailInput'];
    $name = $_POST['nameInput'];
    $phone = $_POST['phoneInput'];

    $subject = "Forespørsel til Livs Lekestue";

    $message = $name . " " . " wrote the following:" . "\n\n" . $_POST['messageInput'] + "\n\n" + "Phone: " + $phone;

    $headers = "From:" . $from;
    if(mail($to,$subject,$message,$headers)) {
        http_response_code(200);  // mail ble sendt, all is well
        exit();
    }
    else
    {
        http_response_code(500); // klarte ikke å sende mail
        exit();
    }
}
?>
