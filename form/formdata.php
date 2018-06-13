<?php 
header("Content-Type: application/json; charset=UTF-8");

$array = array();

$con = mysqli_connect('localhost','root','axelblaze@22','contact') or die('failed to connect');

if($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['method'] === 'form1'){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$cat = $_POST['cat'];
	$page = $_POST['page'];
	
	$subject = 'Contact infomation for new Website';
	$to = "vishal_kushwaha16@yahoo.com" ;

	$body = "<b>Name :</b> {$name}<br>
			 <b>Email :</b> {$email}<br>
			 <b>mobile :</b> {$mobile}<br>
			 <b>category :</b> {$cat}<br>
			 <b>No of pages :</b> {$page}<br>";

	$result = mysqli_query($con,"INSERT INTO contact (id, name,email,mobile,cat,page) VALUES (NULL,'$name','$email','$mobile','$cat','$page')") or die('failed to insert');

	$headers = "From:" . $email . "\n";
	$headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    if($result){
    	$array['status'] = 'success';
    }
    else
    {
    	$array['status'] = 'failed';
    }
	echo json_encode($array);
}


// Second form validation 
if($_SERVER['REQUEST_METHOD']=== 'POST' && $_POST['method']==='post'){
	$secret = '6LfuuVwUAAAAAOiU4nCsiA1pXDBm1EK_N0SkD6A-';
	$response = $_POST['captcha'];

	$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
	if($verify){
	
	$array['captcha-status'] = 'verified';
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$message = $_POST['message'];
	
	$subject = 'Contact infomation for new Website';
	
	$to = 'vishal_kushwaha16@yahoo.com';
	
	$body = '<b>Name :</b> {$name}<br>
		 <b>Email :</b> {$email}<br>
		 <b>mobile :</b> {$mobile}<br>
		 <b>message :</b> {$message}<br>';

    $result = mysqli_query($con,"INSERT INTO contact2 (id, name,email,mobile,message) VALUES (NULL,'$name','$email','$mobile','$message')") or die('failed to insert');

    if($result){
    	$array['status'] = 'success';
    }
    else
    {
    	$array['status'] = 'failed';
    }
	echo json_encode($array);
}else {
	$array['captcha'] = 'Please check the captcha Field';
	echo json_encode($array);
}
} 

?>