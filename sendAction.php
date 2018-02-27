<?php
/**
 * Created by PhpStorm.
 * User: Demi
 * Date: 27.02.2018
 * Time: 10:00
 */


if(isset($_POST['email'])) {

    $email_to = "demi-marie@outlook.de";
    $email_subject = "Sie haben eine neue Nachricht";

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message = "Form details below.\n\n";

    $email_message .= "Name: ".clean_string($_POST['name'])."\n";
    $email_message .= "Email: ".clean_string($_POST['email'])."\n";
    $email_message .= "Nachricht: ".clean_string($_POST['message'])."\n";

    // create email headers
    $headers = 'From: '.$_POST['email']."\r\n".
        'Reply-To: '.$_POST['email']."\r\n" .
        'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);

    ?>
    <!-- include your own success html here -->
    Thank you for contacting us. We will be in touch with you very soon.
    <?php
}
?>
