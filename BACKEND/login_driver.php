<?php
 require_once 'db_connect.php';
  $postdata = file_get_contents("php://input");
    $kode_unik="";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $kode_unik = $request->kode_unik;

    }
//encrypt
$query_login = mysqli_query($connect, "SELECT * FROM pawang WHERE kode_unik='$kode_unik' ");
    if(mysqli_num_rows($query_login)){

        $row=mysqli_fetch_assoc($query_login);
 session_start(); // memulai fungsi session
 $_SESSION['email'] = $username;
 $data =array(
            'message' => "Login Success",
            'data' => $row,
            'status' => "200"
        );
 }
 else {
$data =array(
            'message' => "Login Failed, Email or Password Wrong",
            'status' => "404"
        );
 }
    echo json_encode($data);
 ?>
