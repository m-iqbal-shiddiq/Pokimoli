<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $kode_unik = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $kode_unik = $request->kode_unik; //sama kek front end

        $password = md5($password);
        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO pawang (kode_unik) VALUES ('$kode_unik') ");
            if($query_register){
                 $query_data = mysqli_query($connect,"SELECT * FROM pawang WHERE kode_unik='$kode_unik'");
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
