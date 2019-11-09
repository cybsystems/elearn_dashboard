<?php
function getInvitations()
{
include('db.php');
$sql='select s_id,name,email,category from invitation';
$res=mysqli_query($con,$sql);
$rows = array();
while($r = mysqli_fetch_assoc($res)) {
  $rows[] = $r;
}
return $rows;
}
?>