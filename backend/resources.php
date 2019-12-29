<?php
    function getResources()
    {
        include('db.php');
        $sql="select * from resources";
        $res=mysqli_query($con,$sql);
        $rows = array();
        while ($r = mysqli_fetch_assoc($res)) {
            $rows[] = $r;
        }
        return $rows;
    }
?>
