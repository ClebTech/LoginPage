const eyes = document.querySelectorAll(".bx.bx-eye");
const passwords = document.querySelectorAll(".password");

eyes.forEach((eye, i) => {
    eye.addEventListener("click", () => {
        passwords[i].type = passwords[i].type === "password" ? "text" : "password";
        if(eye.title === "Show password"){
            eye.title = "Hide password";
        }else{ 
            eye.title = "Show password";
        }
        eye.classList.toggle("bx-eye");
        eye.classList.toggle("bx-eye-slash");
    });
});