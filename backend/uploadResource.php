<?php
require('resources.php');

 $targetfolder = "uploads/";
 $targetfolder = $targetfolder . basename( $_FILES['file']['name']) ;
 $fileName = $_POST['fname'];
if(move_uploaded_file($_FILES['file']['tmp_name'], $targetfolder))
{
echo addResource($fileName,$targetfolder,'PDF');
}
 else {
 echo "Problem uploading file";
 }
