
var emailinput=document.getElementById("email");
function ValidateEmail() {

    var validRegex = /^[a-zA-Z0-9.!%&'*/?^_`{|}-üöçşı]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    console.log(emailinput)

    if (emailinput.value.match(validRegex)) {
  
      emailinput.classList.remove("red")
      
  
      return true;
  
    } else {
  
     
      emailinput.classList.add("red")

      return false;
  
    }
  
  }
 
  var saniye=5;

  var zaman;
  function ysYonlendir() {
    if (saniye == 0) {
    console.log("yonlendiriliyor")
      window.location.href = "home.html";
      
    }
    document.getElementById("yonlendir").innerHTML = saniye + " saniye sonra yönlendiriliyorsunuz.";
    saniye= saniye-1;
    zaman=setTimeout(function(){
        ysYonlendir();
      }, 1000);
      console.log(zaman)
  }


function submitLogin(){


    var isValid= ValidateEmail()
    if(isValid){
        window.location.href = "home.html";

        //ysYonlendir();

    }
    
}

function nonRed(){
    emailinput.classList.remove("red")
}