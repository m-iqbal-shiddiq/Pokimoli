<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $lokasi_penjemputan = "";
    $lokasi_tujuan = "";
    $keterangan = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $lokasi_penjemputan = $request->lokasi_penjemputan; //sama kek front end
        $lokasi_tujuan = $request->lokasi_tujuan;
        $keterangan = $request->keterangan;

        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO activity (lokasi_penjemputan,lokasi_tujuan,keterangan) VALUES ('$lokasi_penjemputan', '$lokasi_tujuan', '$keterangan') ");
            if($query_register){
                 $query_data = mysqli_query($connect,"SELECT * FROM activity WHERE lokasi_penjemputan='$lokasi_penjemputan' AND lokasi_tujuan = '$lokasi_tujuan'");
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
