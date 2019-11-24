<?php
function getInvitations()
{
include('db.php');
$sql= 'select id,username,email,classId from studentinvitations';
$res=mysqli_query($con,$sql);
$rows = array();
while($r = mysqli_fetch_assoc($res)) {
  $rows[] = $r;
}
return $rows;
}
?>