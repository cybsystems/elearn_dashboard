<?php
    function getResources()
    {
        include('db.php');
        $sql="select rid,rpath,rname,rtype from resources";
        $res=mysqli_query($con,$sql);
        $rows = array();
        while ($r = mysqli_fetch_assoc($res)) {
            $rows[] = $r;
        }
        return $rows;
    }
    function addResource($fileName,$filePath,$type)
    {
    include('db.php');
    $sql = "insert into resources (rname,rpath,rtype) values ('$fileName','$filePath','$type')";
    $res = mysqli_query($con, $sql);
    if ($res)
        echo  json_encode(array('res' => 'Y'));
    else
        echo  json_encode(array('res' => 'N'));;

    }

    function removeResource($id)
    {
    include('db.php');

    $sql = 'delete   from resources where rid=' . $id;

    $res = mysqli_query($con, $sql);

    if ($res) {
        return json_encode(getResources());
    } 
    }
?>
