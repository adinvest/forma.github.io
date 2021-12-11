<?php
if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ){
	$n = $_POST['name'];
	$e = $_POST['email'];
	$m = nl2br($_POST['message']);
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);
    $name = urldecode($name);
    $email = urldecode($email);
    $message = urldecode($message);
    $name = trim($name);
    $email = trim($email);
    $message  = trim($message);
	$to = "adinvest@list.ru";	
	$from = $e;
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "Ошибка. Пожалуйста, попробуйте еще раз.";
	}
}
?>