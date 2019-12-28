<?php

include('db.php');
require('invitations.php');
$id=$_POST['id'];
$invitation=getInvitation($id) ;
    if($invitation)
        {
            $email=$invitation['email'];
            $ch = curl_init();
$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
</body>
</html>
";
            curl_setopt($ch, CURLOPT_URL, "https://amitwaghamare17.000webhostapp.com/sendEmail.php");
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, "email=$email&msg=$message&subject=Invitation Accepted&from=YashClasses.com");
            $result = curl_exec($ch);
            echo  removeInvitation($id) ;
        }
