<?php
    include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $id_activity = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id_activity = $request->id_activity;
        if($request){
            $query = mysqli_query($connect, "DELETE FROM activity WHERE id_activity = '$id_activity' AND trig = '1' ");
            if($query){
                $data =array(
                    'message' => "Delete succesfully",
                    'status' => "200"
                );
            }
            else{
                $data =array(
                    'message' => "Failed!",
                    'status' => "404"
                );

            }
        }
        else {
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            );
        }

    }

    echo json_encode($data);
?>
