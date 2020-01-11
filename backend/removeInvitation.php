<?php

include('db.php');
require('invitations.php');

$id=$_POST['id'];
$res=removeInvitation($id);
if($res)
 echo removeInvitation($id);
else
    http_response_code(500);

?>


