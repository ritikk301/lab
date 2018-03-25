<?php 
 session_start();
 if(!isset($_POST['submit']))
 {
   header("Location:student.php?submit=Error");
   exit();
 }
 else{ $server="localhost";
 $username="root";
 $password="";
 $dbname="lab";
 
 $conn = mysqli_connect($server,$username,$password,$dbname);
 $uid=$_POST['uname'];
 $pass=$_POST['psw'];
 $reg=$_POST['reg'];
 if(empty($uid)||empty($pass))
 {
   header("Location:student.php?signup=EMPTY");
 exit();}
 else{ $sql="SELECT * FROM stud1 WHERE uname='$uid';";
        $sql2="SELECT * FROM stud2 WHERE reg='$reg';";
		$result=mysqli_query($conn,$sql);
		$result2=mysqli_query($conn,$sql2);
		$resultcheck=mysqli_num_rows($result);
		$resultcheck2=mysqli_num_rows($result2);
		if($resultcheck<1 || $resultcheck2<1 )
		{	 header("Location:student.php?username=INVALID");
		exit();}
		else{ if ($row=mysqli_fetch_assoc($result))
				{$a=strcmp($pass,$row['password']);
				  if(a!=0)
				  { header("Location:admin.php?password=INVALID");
				  exit();}
				  elseif(a==0)
				  { $_SESSION['uname']=$row['username'];
				     $_SESSION['pwd']=$row['password'];
					 $_SESSION['lname']=$row['lastname'];
					 $_SESSION['fname']=$row['firstname'];
					 $_SESSION['id']=$row['id'];
					 $_SESSION['phone']=$row['phone'];
					 $_SESSION['email']=$row['email'];
					 $_SESSION['pic']=$row['pic'];
					 $_SESSION['u_id']=$row['u_id'];
					 $_SESSION['reg']=$row['reg'];
					 $_SESSION['yjoin']=$row['year_join'];
					 $_SESSION['ystudy']=$row['year_study'];
					 $_SESSION['sem']=$row['sem'];
					 $_SESSION['dept']=$row['dept'];
					 $_SESSION['dob']=$row['dob'];
					 $_SESSION['hobby']=$row['hobby'];
					 $_SESSION['cgpa']=$row['cgpa'];
					 
					 
					 
					 header("Location:admin.php?SIGNUP=SUCESS");
				  exit();}
				}
		}
 }
}
					   
?>