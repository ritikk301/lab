function checkName(form)
{
  var eobj=document.getElementById('realnameerror');
  var sRealName = form.realname.value;
  var oRE = /^[a-z0-9]+[_.-]?[a-z0-9]+$/i;
  var error=false;
  eobj.innerHTML='';
  if (sRealName == '') {
   error='Error: Username cannot be blank!';
   form.realname.focus();
}
  else if (sRealName.length < 4)
{
    error="UserName should be atleast 4 characters long";
  }
  else if (!oRE.test(sRealName))
{
   error="Incorrect format.";
  }
  if (error)
{
   form.realname.focus();
   eobj.innerHTML=error;
   return false;
  }
  return true;
 }

function checkEmail(form)          /* for email validation */
{
 var eobj=document.getElementById('emailerror');
 eobj.innerHTML='';
 if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(form.email.value))
 {
  return true;
 }
 eobj.innerHTML='Invalid E-mail Address! Please re-enter.';
 return false;
}

function validatePwd(form)          /* password & retype-password verification */
{
 var eobj1=document.getElementById('passworderror');
 var eobj2=document.getElementById('password2error');
 var minLength=6;
 var invalid=' ';
 var pw1=form.password.value;
 var pw2=form.password2.value;
 var error=false;
 eobj1.innerHTML='';
 eobj2.innerHTML='';
 if (pw1.length<1)
 {
  error='Please enter your password.';
 }
 else if (pw1.length < minLength)
 {
  error='Your password must be at least ' + minLength + ' characters long. Try again.';
 }
 else if (pw1.indexOf(invalid) > -1)
 {
  error='Sorry, spaces are not allowed.';
 }
 if (error)
 {
  form.password.focus();
  eobj1.innerHTML=error;
  return false
 }
 if (pw1 != pw2)
 {
  eobj2.innerHTML=' passwords not matching.Please re-enter your password.';
  return false;
 }
 return true;
}

function validPhone(form)              /* phone no validation */
{
 var eobj=document.getElementById('phonenoerror');
 var valid = '0123456789';
 var phone = form.phoneno.value;
 var error=false;
 var i=0;
 var temp;
 eobj.innerHTML='';
 if (phone == '')
 {
  error='This field is required. Please enter phone number';
 }
 else if (!phone.length > 1 || phone.length < 10)
 {
  error='Invalid phone number length! Please try again.';
 }
 else
 {
  for (i=0; i < phone.length; i++)
 {
   temp = '' + phone.substring(i, i + 1);
   if (valid.indexOf(temp) == -1)
    {
    error='Invalid characters in your phone. Please try again.';
    }
  }
 }
 if (error)
 {
  form.phoneno.focus();
  eobj.innerHTML=error;
  return false;
 }
 return true;
}

function validate()
 {
 var form = document.forms['form'];
 var ary=[checkName,checkEmail,validatePwd,validPhone];
 var rtn=true;
 var z0=0;
 for (var z0=0;z0<ary.length;z0++)
{
  if (!ary[z0](form))
  {
    rtn=false;
  }
 }
 return rtn;
}
</script>