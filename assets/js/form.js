$(function(){$('#book').click(function(e){e.preventDefault();$name=$('#name1').val();$mobile=$('#mobile1').val();$email=$('#email1').val();$cat=$('#cat').val();$page=$('#page').val();$("#error").hide();if($name==""||$name.length<4){$("#error").show().text('Enter Correct Name');return;}else{$("#error").hide(2000);}if($mobile==""){$("#error").show().text('Enter Mobile Number');return;}else if(isNaN($mobile)){$("#error").show().text('Enter Correct Mobile No.');return;}else if($mobile.length<8||$mobile.length>12){$("#error").show().text('Invalid Mobile No.');return;}else{$("#error").hide(2000);}var emailReg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;if($email==""){$("#error").show().text('Enter Your E-mail');return;}else if(!emailReg.test($email)){$("#error").show().text('Enter Correct E-mail');return;}else{$("#error").hide(2000);}$('#book').prop('disabled',true);var formData={method:'form1',name:$name,email:$email,mobile:$mobile,cat:$cat,page:$page};ajaxRequest('#book','/form/formdata.php',formData);});$('#submit').click(function(e){e.preventDefault();$name=$('#name').val();$mobile=$('#mobile').val();$email=$('#email').val();$message=$('#message').val();$(".error").hide();if($name==""||$name.length<4){$("#name").next().show().text('Enter Correct Name');return;}else{$(".error").hide(2000);}var emailReg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;if($email==""){$("#email").next().show().text('Enter Your E-mail');return;}else if(!emailReg.test($email)){$("#email").next().show().text('Enter Correct E-mail');return;}else{$("#email").next().hide(2000);}if($mobile==""){$("#mobile").next().show().text('Enter Mobile Number');return;}else if(isNaN($mobile)){$("#mobile").next().show().text('Enter Correct Mobile No.');return;}else if($mobile.length<8||$mobile.length>12){$("#mobile").next().show().text('Invalid Mobile No.');return;}else{$("#mobile").next().hide(2000);}if($message==""||$message.length<10){$("#message").next().show().text('Message Is Too short');return;}else{$("#message").next().hide(2000);}if(grecaptcha.getResponse()==""){alert('check captcha');return false;}$('#submit').prop('disabled',true);var formData={method:'post',name:$name,email:$email,mobile:$mobile,message:$message,captcha:grecaptcha.getResponse()};ajaxRequest('#submit','/form/formdata.php',formData);});});function ajaxRequest(id,url,data){$.ajax({url:url,type:'POST',data:data,success:function(){alert('Your request has been recorded soon we will contact you');setTimeout(function(){location.href="../../index.html",4000});},error:function(){alert('failed to record your request please try again');$(id).prop('disabled',false);}});}