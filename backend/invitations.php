<?php
function getInvitations()
{
include('db.php');
$sql= 'select id,full_name,email from studentinvitations';
$res=mysqli_query($con,$sql);
$rows = array();
while($r = mysqli_fetch_assoc($res)) {
  $rows[] = $r;
}
return $rows;
}
function getInvitationsCount()
{
  include('db.php');
  $sql = "select COUNT('s_id') from studentinvitations";
  $res = mysqli_query($con, $sql);
  $row = mysqli_fetch_array($res);
  return $row[0];
}
?>