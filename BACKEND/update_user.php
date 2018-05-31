<?php
  include 'db_connect.php';
   $id=$_GET['id_user'];
    $postdata = file_get_contents("php://input");
    $id_user = "";
    $nama_user = "";
    $no_hp ="";
    $email_user = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id_user = $request->id_user;
        $nama_user = $request->nama_user;
        $no_hp = $request->no_hp;
        $email_user = $request->email_user;
          }

        if($request){
            $query_register = mysqli_query($connect,"UPDATE user SET nama_user = '$nama_user', no_hp = '$no_hp', email_user = '$email_user' WHERE id_user = '$id_user'");
            if($query_register){

                 $query_data = mysqli_query($connect,"SELECT * FROM user WHERE id_user='$id'");
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
