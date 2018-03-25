<?php 
 session_start();
 if(!isset($_POST['submit']))
 {
   header("Location:stud.html?submit=Error");
   exit();
 }
 else{ $server="localhost";
 $username="root";
 $password="";
 $dbname="lab";
 
 $conn = mysqli_connect($server,$username,$password,$dbname);
	  $first=$_POST['name'];
	  $second=$_POST['lname'];
	  $third=$_POST['realname'];
	  $fourth=$_POST['email'];$fifth=$_POST['password'];
	  $sixth=$_POST['phoneno'];
	  //error handler.....
	  if(empty($first)||empty($second)||empty($third)||empty($fourth)||empty($fifth)||empty($sixth))
	  {echo"fill the form properly";
         header("Location:stud.html?Login=EMPTY");
	  exit();}
	  else{//checking that the user already exist?
			$sql="SELECT * FROM stud1 WHERE email='$fourth';";
			$result= mysqli_query($conn,$sql);
			$resultcheck= mysqli_num_rows($result);
			if($resultcheck > 0)
			{echo"The user already exist";
			header("Location:stud.html?User=Existing");
			exit();}
			
			else{ 
					$sql="INSERT INTO stud1(lastname,firstname,uname,email,pass,phone) VALUES ('$first','$second','$third','$fourth','$fifth','$sixth');";
					mysqli_query($conn,$sql);
					
				header("Location:stud2.html?SIGNUP=SUCESS!");}}}
?>
					