<?php

include('db.php');
require('invitations.php');

$id=$_POST['id'];

$sql= 'delete   from studentinvitations where id='. $id;

$res=mysqli_query($con,$sql);

if($res)
{ 
echo json_encode(getInvitations());
}
else
{
    http_response_code(500);
}
?>
