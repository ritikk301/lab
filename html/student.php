<?php
 session_start();
 ?>



<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="../css/A.css">
<script type="text/javascript" >

 function validatename()
   {   
		var name=document.getElementById("a").value;
		
			if(name.length==0)
			{
				document.getElementById("label_a").innerHTML="The field cant be left empty!!";
				
				document.getElementById("label_a").style.color="red";return false;}
			if(!name.match(/^[A-Za-z/0-9]*$/))
				{
						document.getElementById("label_a").innerHTML = "please enter proper first and last name !!";
				document.getElementById("label_a").style.color="red"; return false;}
			document.getElementById("label_a").innerHTML = "welcome "+name;
				document.getElementById("label_a").style.color="green";
			return true;
	}
	function blank(a,b)
	{ var name=document.getElementById(a).value;
		
			if(name.length==0)
			{
				document.getElementById(b).innerHTML="The field cant be left empty!!";
				
				document.getElementById(b).style.color="red";return false;}
				return true;}
	function validateform()
	{
		if(!validatename()||!validatereg())
		{				document.getElementById("sub").innerHTML="The form is nt valid!!";
				
				document.getElementById("sub").style.color="red";return false;}
	}
	function validatereg()
{
	var name=document.getElementById('b').value;
		
			if(name.length==0)
			{
				document.getElementById('label_b').innerHTML="The field cant be left empty!!";
				
				document.getElementById('label_b').style.color="red";return false;}
			if(!name.match(/^[2][0][0-1][0-9]{5}$/))
				{   
						document.getElementById('label_b').innerHTML = "please enter registration number !!";
				document.getElementById('label_b').style.color="red"; return false;}
			document.getElementById('label_b').innerHTML = "welcome "+name;
				document.getElementById('label_b').style.color="green";
			return true;
}

</script>


</head>
<body>
<div class="header">
<img src="download.png" alt="nit dgp"/>
<h3>NIT DURGAPUR</h3>
<h5 font-color:white>
(An Institute of National Importance under Government of India, Ministry of Human Resource Development) 
<br>Mahatma Gandhi Avenue, Durgapur 713209, West Bengal, INDIA</h5>
</div>
<nav>
`	<ul>
		<li  ><a href="home.html">HOME</a> 
</li>
		<li><a href="admin.html">ADMIN</a></li>
		<li><a href="student.html">STUDENTS</a></li>
  
	</ul>
</nav>
<h2>Student  Login Form</h2>

<form action="studenthandle.php" method="POST" >
  <div class="imgcontainer">
    <img src="student-icon-53587.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
   
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" onblur ='validatename()' onblur="blank('a','label_a')" id="a"><label id="label_a"></label><br>
	 <label for="reg"><b>Registration number:-</b></label>
    <input type="text" placeholder="Enter Registration Number" name="reg" onblur ='validatereg()' onblur="blank('a','label_b')" id="b"><label id="label_b"></label><br>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" >
        
    <button type="submit" name="submit" onclick='validatereg()'>Login</button><label id="sub"></label>
    
  <label id="sub"></label>
  <br>
  
	<button type="reset" class="cancelbtn">Cancel</button>
	<a href="stud.html" class="button1">SIGN UP</a>
    
  </div>
</form>


</body>
</html>