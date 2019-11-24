<?php
include('db.php');
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
$classId = $_POST['classId'];
$sql = "insert into studentinvitations (username,password,email,classId) values ('$username','$password','$email',$classId)";

$res = mysqli_query($con, $sql);
if ($res)
    echo  json_encode(array('res' => 'Y'));
else
    echo  json_encode(array('res' => 'N'));;
