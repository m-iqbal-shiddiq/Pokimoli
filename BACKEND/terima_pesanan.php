<?php
	include 'db_connect.php';
	$q = mysqli_query($connect,"SELECT user.nama_user, user.no_hp, activity.lokasi_penjemputan, activity.lokasi_tujuan, activity.keterangan FROM user JOIN activity ON activity.id_user = user.id_user WHERE activity.trig = '0'");
	while($result=mysqli_fetch_assoc($q)){
		$result_set[]=$result;
	}
	$data=array(
		'message'=>'Get Activity',
		'data'=>$result_set,
		'status'=>'200'
	);
	echo json_encode($data);
?>
