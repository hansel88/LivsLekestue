<?php 
    if(isset($_POST['submit'])){
        $to = "hpn_x@hotmail.com"; // this is your Email address
        $from = $_POST['mailInput']; // this is the sender's Email address
        $name = $_POST['nameInput'];
        $phone = $_POST['phoneInput'];
        $subject = "forespørsel til Livs Lekestue";
        $subject2 = "";
        $message = $name . " " . " wrote the following:" . "\n\n" . $_POST['messageInput'] + "\n\n" + "Phone: " + $phone;

        $headers = "From:" . $from;
        mail($to,$subject,$message,$headers);
        echo "<script type='text/javascript'>alert('Din forespørsel er sendt!');</script>";
        }
?>