<?php
require('invitations.php');
$responseArr=array();

array_push($responseArr,
        (object) array('title' => 'Students','count'=>100),
        (object) array('title' => 'Videos', 'count' => 100),
        (object) array('title' => 'PDF Notes', 'count' => 100),
        (object) array('title' => 'Requests', 'count' => getInvitationsCount())
    );


echo json_encode(array('res'=>$responseArr));
?>

