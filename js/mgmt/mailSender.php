<?php

include("class.phpmailer.php");

include("class.smtp.php");

$from= $_POST['from'];
$to= $_POST['to'];
$subject= $_POST['subject'];
$message= $_POST['body'];
$name = $_POST['name'];
/*$header = "From: $from \r\n";

$retval = mail($to,$subject,$message,$header);

if( $retval == true )  
{
   echo "Email SUCCESS";
}
else
{
   echo "Email NOT SENT";
}

exit;*/

$mail=new PHPMailer();


$mail->IsSMTP();

$mail->SMTPAuth = true; // enable SMTP authentication

$mail->SMTPSecure = "ssl"; // sets the prefix to the servier

$mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server

$mail->Port = 465; // set the SMTP port

$mail->CharSet = 'utf-8';

$mail->Username = "sitioweb@elparaisoazul.com"; // GMAIL username

$mail->Password = "cambiarPSW1234"; // GMAIL password


$mail->From = "sitioweb@elparaisoazul.com";

$mail->FromName = "Sitio Web - Posada El Paraíso Azul";

$mail->Subject = $subject;

$mail->Body = $message;

$mail->AddAddress($to,"Posada El Paraíso Azul");

$mail->AddReplyTo($from,$name);

$mail->IsHTML(false); // send as HTML


if(!$mail->Send()) {

echo "Mailer Error: " . $mail->ErrorInfo;

} else {

echo "Message has been sent";

}

?>
