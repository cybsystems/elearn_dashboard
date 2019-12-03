<?php
include('db.php');

$full_name = $_POST['full_name'];
   $email = $_POST['email'];
 
$classId = $_POST['classId'];

$sql = "insert into studentinvitations (full_name, email,  classId) values 
('$full_name' ,'$email',$classId)";

$res = mysqli_query($con, $sql);
if ($res)
    echo  json_encode(array('res' => 'Y'));
else
    echo  json_encode(array('res' => 'N'));;
