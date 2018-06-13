
$(function(){
	$('#submit').on('click',function(e){
	e.preventDefault();
	$name = $('#name').val();
	$email = $('#email').val();
	$mobile = $('#mobile').val();
	$message = $('#message').val();

	if($name == "" ){
		$span = $('#name').next();
		$span.text('Enter Your Name');
		return false;
		} else {
			$span.text('');
			return;
		}
		
		if($email == ""){
		$span = $('#email').next();
		$span.text('Enter Your Email');
		return false;
		}
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test($email)){
			$span.text('Enter Valid Email');
			return false;	
		} 
		else {
			$span.text('');
		}
		

		if($mobile == ""){
		$span = $('#mobile').next();
		$span.text('enter correct value');
		return false;
		} 
		if(isNaN($mobile)){
			$span.text('Enter Valid No');
			return false;
		}
		if($mobile.length < 9 || $mobile.length >12){
			$span.text('Invalid length');
			return false;
		}
		else
		{
			$span.text('');
		}

		if($message == ""){
		$span = $('#message').next();
		$span.text('enter correct value');
		return false;
		} else {
			$span.text('');
		}
		
		if(grecaptcha.getResponse() == ""){
			alert('check captcha');
			return false;
		}

		$('#submit').prop('disabled', true);
	var formData = {
		method : 'post',
		name : $name,
		email : $email,
		mobile : $mobile,
		message : $message,
		captcha:grecaptcha.getResponse()
	};

	$.ajax({
		url : '/form/formdata.php',
		type : 'POST',
		data : formData,
		success : function(){
			alert('Your request has been recorded soon we will contact you');
			//setTimeout(function(){location.href="../index.html", 4000} );
		},
		error : function(){
			alert('failed to record your request please try again');
			$('#submit').prop('disabled', false);
		}
	});
});

	$('#book').on('click',function(e){
	$name = $('#name1').val();
	$email = $('#email1').val();
	$mobile = $('#mobile1').val();
	$cat = $('#cat').val();
	$page = $('#page').val();

	if($name == "" ){
		$span = $('#error');
		$span.text('Enter Your Name');
		return false;
		} else {
			$span.text('');
		}

		if($email == ""){
		$span = $('#error');
		$span.text('Enter Your Email');
		return false;
		}
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test($email)){
			$span.text('Enter Valid Email');
			return false;	
		} 
		else {
			$span.text('');
		}
		

		if($mobile == ""){
		$span = $('#error');
		$span.text('Enter Mobile Number');
		return false;
		} 
		if(isNaN($mobile)){
			$span.text('Enter Valid No');
			return false;
		}
		if($mobile.length < 9 || $mobile.length >12){
			$span.text('Invalid length');
			return false;
		}
		else
		{
			$span.text('');
		}
		$('#book').prop('disabled', true);
	var formData = {
		method : 'form1',
		name : $name,
		email : $email,
		mobile : $mobile,
		cat : $cat,
		page : $page
	};

	$.ajax({
		url : '/form/formdata.php',
		type : 'POST',
		data : formData,
		success : function(){
			alert('Your request has been recorded soon we will contact you');
		//	setTimeout(function(){location.href="../index.html", 4000} );
		},
		error : function(){
			alert('failed to record your request please try again');
			$('#book').prop('disabled', false);
		}
	});
		e.preventDefault();
});
});
