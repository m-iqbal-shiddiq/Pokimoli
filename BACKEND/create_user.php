<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $nama = "";
    $email = "";
    $no_hp = "";
    $password = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $nama = $request->nama; //sama kek front end
        $no_hp = $request->no_hp;
        $email = $request->email; //sama kek front end
        $password = $request->password; //sama kek front end

        $password = md5($password);
        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO user (nama_user, no_hp, email_user, password_user) VALUES ('$nama', '$no_hp', '$email', '$password') ");
            if($query_register){
                 $query_data = mysqli_query($connect,"SELECT * FROM user WHERE email_user='$email' AND password_user='$password'");
                 if(mysqli_num_rows($query_data)){
                         $row=mysqli_fetch_assoc($query_data);

                         $data =array(
                             'message' => "Register Success!",
                             'data' => $row,
                             'status' => "200"

                         );
                 }
                 else{
                        $data =array(
                             'message' => "Register failed, gadapet datanya!",

                             'status' => "400"

                         );
                 }
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404",

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
