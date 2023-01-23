

// const MoNumber = document.getElementById("mo-number");
// const MoError = document.getElementById("mo-error");

// MoError.style.color = "red";

//mobile number validation
function novalidate(){
    var c = document.getElementById("mo-number").value;
    if (c==""){
        document.getElementById("mo-error").innerHTML = "Please Fill Mobile Number";
        return false;
    }
    else{
        document.getElementById("mo-error").innerHTML = "";
    }
    if (isNaN(c)){
        document.getElementById("mo-error").innerHTML = "Only Number allowed";
        return false;
    }
    else{
        document.getElementById("mo-error").innerHTML = "";
    }
    if(c.length<10){
        document.getElementById("mo-error").innerHTML = "Mobile Number Must Be 10 Digit";
        return false;
    }
    else{
        document.getElementById("mo-error").innerHTML = "";
    }

    if(c.length>10){
        document.getElementById("mo-error").innerHTML = "Mobile Number Must Be 10 Digit";
        return false;
    }
    else{
        document.getElementById("mo-error").innerHTML = "";
    }
}
//onclick button contact
function contactcall(){
    const contact = duocment.getElementById("contact").
    window.contact
}
//mobile navagition
function call3(){
    document.getElementById("nav").style.left = "0";
}
function rem(){
    document.getElementById("nav").style.left = "-100%";
}
function call2(){
    document.getElementById("nav").style.left = "-100%";
}
//email validation
const email = document.getElementById("email");
const errorr = document.getElementById("error");
function call(){
    let RegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.match(RegExp)){
        errorr.innerText = "";  
    }
    else{
        errorr.innerText = "Please Enter Valid Email";  
        return false;  
    }
}

