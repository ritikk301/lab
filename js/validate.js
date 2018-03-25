function validateuname()
   {   document.getElementById("aa").disabled = true;
		var name=document.getElementById('name').value;
		
			if(name.length==0)
			{
				document.getElementById('q').innerHTML="The field cant be left empty!!";
				
				document.getElementById('q').style.color="red";return false;}
			if(!name.match(/^[A-Za-z][A-Za-z/0-9]*$/))
				{
						document.getElementById('q').innerHTML = "please enter proper first and last name !!";
				document.getElementById('q').style.color="red"; return false;}
			document.getElementById('q').innerHTML = "welcome "+name;
				document.getElementById('q').style.color="green";
			return true;
	}
	function validatename()
   {   
		var name=document.getElementById('a').value;
		
			if(name.length==0)
			{
				document.getElementById('p').innerHTML="The field cant be left empty!!";
				
				document.getElementById('p').style.color="red";return false;}
			if(!name.match(/^[A-Za-z][A-Za-z]*$/))
				{
						document.getElementById('p').innerHTML = "please enter proper username !!";
				document.getElementById('p').style.color="red"; return false;}
			document.getElementById('p').innerHTML = "welcome "+name;
				document.getElementById('p').style.color="green";
			return true;
	}
	function validatelname()
   {   
		var name=document.getElementById('n').value;
		
			if(name.length==0)
			{
				document.getElementById('m').innerHTML="The field cant be left empty!!";
				
				document.getElementById('m').style.color="red";return false;}
			if(!name.match(/^[A-Za-z][A-Za-z]*$/))
				{
						document.getElementById('m').innerHTML = "please enter proper username !!";
				document.getElementById('m').style.color="red"; return false;}
			document.getElementById('m').innerHTML = "welcome "+name;
				document.getElementById('m').style.color="green";
			return true;
	}
	
		function validatepassword()
   {   
		var name=document.getElementById('c').value;
		
			if(name.length==0)
			{
				document.getElementById('s').innerHTML="The field cant be left empty!!";
				
				document.getElementById('s').style.color="red";return false;}
			if(!name.match(/^[A-Za-z/0-9][A-Za-z/0-9]*[@#\.][A-Za-z/0-9]*$/))
				{
						document.getElementById('s').innerHTML = "Password should contain letters,numbers and special character !!";
				document.getElementById('s').style.color="red"; return false;}
			document.getElementById('s').innerHTML = "welcome ";
				document.getElementById('s').style.color="green";
			return true;
	}
	
		function validateEmail()
   {   
		var name=document.getElementById('b').value;
		
			if(name.length==0)
			{
				document.getElementById('r').innerHTML="The field cant be left empty!!";
				
				document.getElementById('r').style.color="red";return false;}
			if(!name.match(/^[A-Za-z/0-9]*@[A-Za-z]*[/.][A-Za-z]*$/))
				{
						document.getElementById('r').innerHTML = "please enter proper email !!";
				document.getElementById('r').style.color="red"; return false;}
			document.getElementById('r').innerHTML = "welcome "+name;
				document.getElementById('r').style.color="green";
			return true;
	}
	
	function validatephno()
   {   
		var name=document.getElementById('d').value;
		
			if(name.length==0)
			{
				document.getElementById('t').innerHTML="The field cant be left empty!!";
				
				document.getElementById('t').style.color="red";return false;}
			if(!name.match(/^[0-9]*$/))
				{   
						document.getElementById('t').innerHTML = "please enter proper phone no. !!";
				document.getElementById('t').style.color="red"; return false;}
			if(name.length>10)
			{
			document.getElementById('t').innerHTML = "max size of phone number is 10 digits !!";
				document.getElementById('t').style.color="red"; return false;	
			}
			document.getElementById('t').innerHTML = "welcome "+name;
				document.getElementById('t').style.color="green";
			return true;
	}
	
	function blurr(a,b)
	{ var name=document.getElementById(a).value;
		
			if(name.length==0 )
			{
				document.getElementById(b).innerHTML="The field cant be left empty!!";
				
				document.getElementById(b).style.color="red";return false;}
				return true;}
	function validateform()
	{  
		if(!validatename()||!validateuname() ||!validateemail()||!validatepassword()||!validatephno())
		{				document.getElementById('sub').innerHTML="The form is nt valid!!";
				
				document.getElementById('sub').style.color="red";return false;}
	}