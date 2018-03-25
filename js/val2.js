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
function blurr(a,b)
{ var name=document.getElementById(a).value;
		
			if(name.length==0 )
			{
				document.getElementById(b).innerHTML="The field cant be left empty!!";
				
				document.getElementById(b).style.color="red";return false;}
				return true;
   }
	

function validatejoin()
{var name=document.getElementById('join').value;
		
			if(name.length==0)
			{
				document.getElementById('z').innerHTML="The field cant be left empty!!";
				
				document.getElementById('z').style.color="red";return false;}
			if(!name.match(/^[0-9]{4}$/))
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
			if(!name.match(/^[1-4]$/))
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
document.getElementById('e').style.color="green"; return true;}

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
						document.getElementById('f').style.color="green";return true;
}

function validateform()
{
	
	if(!validatereg()||!validatejoin() ||!validateyear()||!validatesem()|| !validated() ||!validater()||!validatecgpa())
		{				document.getElementById('sub').innerHTML="The form is nt valid!!";
				
				document.getElementById('sub').style.color="red";return false;}
				else {return true;}
}


function show(val)
{ 
  
   var ele=document.getElementById('co');
 if(val=='7')
   ele.style.display='block';
 else  
   ele.style.display='none';
}









