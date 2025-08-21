const eye = document.querySelectorAll(".bx.bx-eye");
const password = document.querySelectorAll(".password");

for (let i = 0; i < 2; i++) { //i = passwords inputs
    eye[i].addEventListener("click", function () {
        password[i].type = password[i].type === "password" ? "text" : "password";
        eye[i].classList.toggle("bx-eye");
        eye[i].classList.toggle("bx-eye-slash");
    });
}