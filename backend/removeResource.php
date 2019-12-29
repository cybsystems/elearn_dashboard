<?php

include('db.php');
require('resources.php');

$id=$_POST['rid'];
$res=removeResource($id);
if($res)
 echo $res;
else
    http_response_code(500);
