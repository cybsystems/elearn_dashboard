<?php

include('db.php');
require('invitations.php');

$s_id=$_POST['s_id'];

$sql='delete   from invitation where s_id='.$s_id;

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
