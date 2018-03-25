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
			if(!name.match(/^[A-Za-z][A-Za-z]*\s{1}[A-Za-z][A-Za-z]*$/))
				{
						document.getElementById('p').innerHTML = "please enter proper username !!";
				document.getElementById('p').style.color="red"; return false;}
			document.getElementById('p').innerHTML = "welcome "+name;
				document.getElementById('p').style.color="green";
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
		if(!validatename()||!validateuname() ||!validateemail()||!validatepassword()||!validatephno()||!validatereg()||!validatejoin() ||!validateyear()||!validatesem()|| !validated() ||!validater()||!validatecgpa())
		{				document.getElementById('sub').innerHTML="The form is nt valid!!";
				
				document.getElementById('sub').style.color="red";return false;}
	}
	function validatereg()
{
	var name=document.getElementById('rg').value;
		
			if(name.length==0)
			{
				document.getElementById('a').innerHTML="The field cant be left empty!!";
				
				document.getElementById('a').style.color="red";return false;}
			if(!name.match(/^[2][0][0-1][0-9]{5}$/))
				{   
						document.getElementById('a').innerHTML = "please enter registration number !!";
				document.getElementById('a').style.color="red"; return false;}
			document.getElementById('a').innerHTML = "welcome "+name;
				document.getElementById('a').style.color="green";
			return true;
}

	

function validatejoin()
{var name=document.getElementById('join').value;
		
			if(name.length==0)
			{
				document.getElementById('z').innerHTML="The field cant be left empty!!";
				
				document.getElementById('z').style.color="red";return false;}
			if(!name.match(/^[0-9]*$/))
				{   
						document.getElementById('z').innerHTML = "please enter joining year !!";
				document.getElementById('z').style.color="red"; return false;}
				if(name.length>4)
			{
			document.getElementById('z').innerHTML = "max size of a year is 4 digits !!";
				document.getElementById('z').style.color="red"; return false;	
			}
			document.getElementById('z').innerHTML = "U joined in "+name;
				document.getElementById('z').style.color="green";
return true;}

function validateyear()
{var name=document.getElementById('year').value;
		
			if(name.length==0)
			{
				document.getElementById('b').innerHTML="The field cant be left empty!!";
				
				document.getElementById('b').style.color="red";return false;}
			if(!name.match(/^[1-4]*$/))
				{   
						document.getElementById('b').innerHTML = "please enter a valid year !!";
				document.getElementById('b').style.color="red"; return false;}
				if(name.length>1)
			{
			document.getElementById('b').innerHTML = "max size of a year is 4 digits !!";
				document.getElementById('b').style.color="red"; return false;	
			}
			document.getElementById('b').innerHTML = "welcome in  "+name+" rd year";
				document.getElementById('b').style.color="green";
return true;}

function validatesem()
{	var name=document.getElementById('sem').value;
		
			if(name.length==0)
			{
				document.getElementById('c').innerHTML="The field cant be left empty!!";
				
				document.getElementById('c').style.color="red";return false;}
			if(!name.match(/^[1-8]$/))
				{   
						document.getElementById('c').innerHTML = "please enter valid semester !!";
				document.getElementById('c').style.color="red"; return false;}
			document.getElementById('c').innerHTML = "u are in  "+name + "th semester";
				document.getElementById('c').style.color="green";
			return true;
}
function validated()

{var name=document.getElementById('dob').value;
		
			if(name.length==0)
			{
				document.getElementById('d').innerHTML="The field cant be left empty!!";
				
				document.getElementById('d').style.color="red";return false;}
			if(!name.match(/^[1-3][0-9]-[0-1][0-9]-[1-2][0-9]{3}$/))
				{   
						document.getElementById('d').innerHTML = "please enter valid date of birth in formate dd-mm-yyyy !!";
				document.getElementById('d').style.color="red"; return false;}
			document.getElementById('d').innerHTML = "ur dob is  "+name ;
				document.getElementById('d').style.color="green";
return true;}

function validater()
{var name=document.getElementById('r').value;
		
			if(name.length==0)
			{
				document.getElementById('e').innerHTML="The field cant be left empty!!";
				
				document.getElementById('e').style.color="red";return false;}
			if(!name.match(/^[1][0-9]\/[A-Z]{2}\/[0-9]{2}$/))
				{   
						document.getElementById('e').innerHTML = "please enter valid roll number according to your department eg-15/IT/34 !!";
				document.getElementById('e').style.color="red"; return false;}
			document.getElementById('e').innerHTML = "ur roll no  is  "+name ;
document.getElementById('e').style.color="green";}

function validatecgpa()
{var name=document.getElementById('cgpa').value;
		
			if(name.length==0)
			{
				document.getElementById('f').innerHTML="The field cant be left empty!!";
				
				document.getElementById('f').style.color="red";return false;}
			if(!name.match(/^[5-9].[0-9]{2}$/))
				{   
						document.getElementById('f').innerHTML = "please enter valid cgpa upto 2 decimal places !!";
						document.getElementById('f').style.color="red"; return false;}
						document.getElementById('f').innerHTML = "ur cgpa  is  "+name ;
						document.getElementById('f').style.color="green";
}


		















