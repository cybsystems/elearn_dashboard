<?php
include('db.php');
$sql='select name,email,category from student';
$res=mysqli_query($con,$sql);
$rows = array();
while($r = mysqli_fetch_assoc($res)) {
  $rows[] = $r;
}
echo json_encode($rows);
