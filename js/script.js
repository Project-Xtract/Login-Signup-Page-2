const pwShowHide = document.querySelectorAll(".eye-icon");

// for password visibility, switching between password type and text type.

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
}) 


// for valid email and password strength error
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strengthLevel = document.getElementById("strength");  

  pass.addEventListener('input',() => {
    if(pass.value.length > 0){
      msg.style.display = "block";
    }
    else{
      msg.style.display = "none";
    }
    if(pass.value.length < 4) {
      strengthLevel.innerHTML = 'weak';
      msg.style.color = '#DB4437';
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
      strengthLevel.innerHTML = 'medium';
      msg.style.color = '#F4B400';
    }
    else if(pass.value.length >= 8){
      strengthLevel.innerHTML = 'strong';
      msg.style.color = '#0F9D58';
    }
  });