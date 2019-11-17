<?php

function getCategories()
{
    include('db.php');
    $sql = 'select cat_id,category from category';
    $res = mysqli_query($con, $sql);
    $rows = array();
    while ($r = mysqli_fetch_assoc($res)) {
        $rows[] = $r;
    }
    return $rows;
}
?>