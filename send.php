<?php 
if(isset($_POST['submit'])){ 
	$to = "contact@xchangecapital.group";
    	$from = "no-reply@xchangecapital.group";

	$name = $_POST['name'];
	$email = $_POST['email'];
	$list = $_POST['list'];
    	$subject = "Message from form";
	
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Email address does not exist");
}
	
$mail_to_myemail = "Hello! 
A message has been sent from the site!
Name: $name
E-mail: $email 
Service: $list";	
	
$headers = "From: $from \r\n";
	
    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
    echo "Message sent. Thanks you " . $name . ", we will contact you shortly.";
	echo "<br /><br /><a href='https://xchangecapital.group/'>Go back to the main page.</a>";
}
?>
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://xchangecapital.group/");}
window.setTimeout("changeurl();",3000);
</script>
