<?php
include('db.php');
$catId = $_POST['CategoryId'];
$cat = $_POST['Category'];
$sql = "insert into category values ($catId,'$cat')";
$res = mysqli_query($con, $sql);
if ($res)
    echo  json_encode(array('res' => 'Y'));
else
    echo  json_encode(array('res' => 'N'));;
