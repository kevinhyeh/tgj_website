<?php
	// if (isset('su?bmit')) {
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_subject = "New Client";
	$email_body = "User name: $name.\n"."User email: $visitor_email.\n"."Message: $message.\n";

	$to = "yehkho@aol.com";
	$headers = "From: $visitor_email \r\n";
	$headers .= "Reply to: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: contact.php");

// }
?>hi