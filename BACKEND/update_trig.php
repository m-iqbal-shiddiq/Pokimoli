<?php
  include 'db_connect.php';
   $id=$_GET['id_activity'];
    $postdata = file_get_contents("php://input");


    if (isset($postdata)) {
        $request = json_decode($postdata);

          }

        if($request){
            $query_register = mysqli_query($connect,"UPDATE activity SET trig = '1' WHERE id_activity='$id'");
            if($query_register){

                 $query_data = mysqli_query($connect,"SELECT * FROM activity WHERE id_activity='$id'");
                 if(mysqli_num_rows($query_data)){
                 $row = mysqli_fetch_assoc($query_data);
                 $data =array(
                     'message' => "Register Success!",
                     'data' => $row,
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404",
                     'errornih' => $query_register
                 );
             }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            );
        }


        echo json_encode($data);
    }
?>
