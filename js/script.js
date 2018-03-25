
function validatename(x){
    var regex = /^[a-zA-Z ]{2,50}$/;
    var ctrl =  document.getElementsByTagName('input')[x];
    var ctrl1 =  document.getElementsByTagName('span')[x];
    if (regex.test(ctrl.value)) {
        ctrl.style.borderColor = 'green';
        ctrl1.innerHTML = ""
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        document.getElementById('a').innerHTML = "Error Username "
        return false;
    }
}

function validateEmail(x){
        var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/;
        var ctrl =  document.getElementsByTagName('input')[x];
        var ctrl1 =  document.getElementsByTagName('span')[x];
        if (regex.test(ctrl.value)) {
            ctrl.style.borderColor = 'green';
            ctrl1.innerHTML = "";
            return true;
        }
    else {
        ctrl.style.borderColor = 'red';
		
        ctrl1.innerHTML = "Error in your email";
		ctrl1.text-color='red';
        return false;
    }

}


function validate_ph_no(x) {
    var regex = /^[1-9][0-9]{9}$/; 
    var ctrl = document.getElementsByTagName('input')[x];
    var ctrl1 = document.getElementsByTagName('span')[x];
    if (regex.test(ctrl.value)) {
            ctrl.style.borderColor = 'green';
            ctrl1.innerHTML = "";
            return true;
        }
    else {
        ctrl.style.borderColor = 'red';
        ctrl1.innerHTML = "Error Message";
        return false;
    }
}

function validateempty(x){
    var ctrl = document.getElementsByTagName('input')[x];
    var ctrl1 = document.getElementsByTagName('span')[x];
    if (ctrl.value!="")
    {
            ctrl.style.borderColor = 'green';
            ctrl1.innerHTML = "";
            return true;
        }
    else {
        ctrl.style.borderColor = 'red';
        ctrl1.innerHTML = "Error Message";
        return false;
    }
}

function validatepassword(x){
    var regex = /^[a-zA-Z0-9 ]{6,20}$/;
    var ctrl =  document.getElementsByTagName('input')[x];
    var ctrl1 =  document.getElementsByTagName('span')[x];
    if (regex.test(ctrl.value)) {
        ctrl.style.borderColor = 'green';
        ctrl1.innerHTML = "";
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        ctrl1.innerHTML = "Error Message";
        return false;
    }
}

function validatecpassword(x){
    var passwd = document.getElementsByTagName('input')[x-1];
    var ctrl =  document.getElementsByTagName('input')[x];
    var ctrl1 =  document.getElementsByTagName('span')[x];
    if (ctrl.value === passwd.value) {
        ctrl.style.borderColor = 'green';
        ctrl1.innerHTML = "";
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        ctrl1.innerHTML = "Error Message";
        return false;
    }
}

function validateboard(id){
   var regex = /^[a-zA-Z ]{3,50}$/;
    var ctrl =  document.getElementById(id);
    if (regex.test(ctrl.value)) {
        ctrl.style.borderColor = 'green';
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        return false;
    }
}
function validatepercent(id){
    var ctrl =  document.getElementById(id);
    var y = parseFloat(ctrl.value);
    if (y>=0.0 && y<=100) {
        ctrl.style.borderColor = 'green';
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        return false;
    }
}
function validateyear(id){
    var ctrl =  document.getElementById(id);
    var y = parseInt(ctrl.value);
    if (y>=2000 && y<=2019) {
        ctrl.style.borderColor = 'green';
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        return false;
    }
}

function validatesem(id){
    var ctrl =  document.getElementById(id);
    var y = parseInt(ctrl.value);
    if (y>=1 && y<=8) {
        ctrl.style.borderColor = 'green';
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        return false;
    }
}

function validatecgpa(id){
    var ctrl =  document.getElementById(id);
    var y = ctrl.value.toString()
    if (y!="" && ctrl.value>=0.0 && ctrl.value<=10) {
        ctrl.style.borderColor = 'green';
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        return false;
    }
}
function validateroll(id){
    var regex=/^[0-9][0-9](\/|-)?[a-zA-Z]{2,3}(\/|-)?[0-9][0-9]?[0-9]?$/;
    var ctrl =  document.getElementById(id);
    if (regex.test(ctrl.value)) {
        ctrl.style.borderColor = 'green';
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        return false;
    }
}
function validatereg(id){
     var regex = /^[1-2][0-9]{7}$/; 
    var ctrl =  document.getElementById(id);
    if (regex.test(ctrl.value)) {
        ctrl.style.borderColor = 'green';
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        return false;
    }
}
function validateempty(id){
     var regex = /^[a-zA-Z ]{2,300}$/;
    var ctrl =  document.getElementById(id);
    if (regex.test(ctrl.value)) {
        ctrl.style.borderColor = 'green';
        return true;
    }
    else {
        ctrl.style.borderColor = 'red';
        return false;
    }
}