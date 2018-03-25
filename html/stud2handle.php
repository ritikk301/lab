<?php 
 session_start();
 if(!isset($_POST['submit']))
 {
   header("Location:stud2.html?submit=Error");
   exit();
 }
 else{ $server="localhost";
 $username="root";
 $password="";
 $dbname="lab";
 
 $conn = mysqli_connect($server,$username,$password,$dbname);
	  $first=$_POST['rno'];
	  $second=$_POST['join'];
	  $third=$_POST['year'];
	  $fourth=$_POST['sem'];$fifth=$_POST['dob'];
	  $sixth=$_POST['department'];$seventh=$_POST['hobby'];
	  $eight=$_POST['co'];
	  
	  $nine=$_POST['cgpa'];
	  //error handler.....
	  if(empty($first)||empty($second)||empty($third)||empty($fourth)||empty($fifth)||empty($sixth)||empty($nine))
	  {echo"fill the form properly";
         header("Location:stud2.html?Login=EMPTY");
	  exit();}
	  else{//checking that the user already exist?
			if($seventh==7)
			{$choice = $_POST['co'];}
		    else{$choice = $_POST['hobby'];}
			$sql="SELECT * FROM stud2 WHERE reg='$first';";
			$result= mysqli_query($conn,$sql);
			$resultcheck= mysqli_num_rows($result);
			if($resultcheck > 0)
			{echo"The user already exist";
			header("Location:stud.html?User=Existing");
			exit();}
			
			else{ 
					$sql="INSERT INTO stud2(reg,year_join,year_study,sem,dob,dept,hobby,cgpa) VALUES ('$first','$second','$third','$fourth','$fifth','$sixth','$choice','$nine');";
					mysqli_query($conn,$sql);
					
				header("Location:student.html?SIGNUP=SUCESS!WAIT FOR RESPONSE");}}}
?>
					