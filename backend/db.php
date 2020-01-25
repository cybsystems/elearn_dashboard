<?php
 header("Access-Control-Allow-Origin: *");

$con=mysqli_connect('localhost', 'root', '', 'elearn', '3306');

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>