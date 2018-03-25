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
	function blank()
	{ var name=document.getElementById("a").value;
		
			if(name.length==0)
			{
				document.getElementById("label_a").innerHTML="The field cant be left empty!!";
				
				document.getElementById("label_a").style.color="red";return false;}
				return true;}
	function validateform()
	{
		if(!validatename())
		{				document.getElementById("sub").innerHTML="The form is nt valid!!";
				
				document.getElementById("sub").style.color="red";return false;}
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
<h2>Admin Login Form</h2>

<form action="adminhandle.php" method="POST" >
  <div class="imgcontainer">
    <img src="Designcontest-Ecommerce-Business-Admin.ico" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" onkeyup="validatename()" onblur="blank()" id="a"> <label id="label_a"></label><br>

    <label for="psw"><b>Password</b></label> 
    <input type="password" placeholder="Enter Password" name="psw" ><br>
        
    <button onclick="validateform()" name="submit">Login</button>

	<label id="sub"></label>
  <br>
	<button type="reset" class="cancelbtn">Cancel</button>
    
  </div>
</form>


</body>
</html>