<?php 
 session_start();
 if(!isset($_POST['submit']))
 {
   header("Location:admin.php?submit=Error");
   exit();
 }
 else{ $server="localhost";
 $username="root";
 $password="";
 $dbname="lab";
 
 $conn = mysqli_connect($server,$username,$password,$dbname);
 $uid=$_POST['uname'];
 $pass=$_POST['psw'];
 if(empty($uid)||empty($pass))
 {
   header("Location:admin.php?signup=EMPTY");
 exit();}
 else{ $sql="SELECT * FROM admin WHERE username='$uid';";
		$result=mysqli_query($conn,$sql);
		$resultcheck=mysqli_num_rows($result);
		if($resultcheck<1)
		{	 header("Location:admin.php?username=INVALID");
		exit();}
		else{ if ($row=mysqli_fetch_assoc($result))
				{$a=strcmp($pass,$row['password']);
				  if(a!=0)
				  { header("Location:admin.php?password=INVALID");
				  exit();}
				  elseif(a==0)
				  { $_SESSION['u_id']=$row['username'];
				     $_SESSION['pwd']=$row['password'];
					 header("Location:admin.php?SIGNUP=SUCESS");
				  exit();}
				}
		}
 }
}
					   
?>