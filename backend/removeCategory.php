<?php

include('db.php');
require('categories.php');

$cat_id = $_POST['cat_id'];

$sql = 'delete   from category where cat_id=' . $cat_id;

$res = mysqli_query($con, $sql);

if ($res) {
    echo json_encode(getCategories());
} else {
    http_response_code(500);
}
