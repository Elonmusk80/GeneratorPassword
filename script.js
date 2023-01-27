const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
copyIcon = document.querySelector(".input-box span"),
passwordInput = document.querySelector(".input-box input"),
generateBtn = document.querySelector(".generate-btn");

let dataSymbol = 'qwertyuiopasdfghjklzxcvbnm123456789"|}{>:?%@^&%*&()&#$';

let lengthPass = 1;
function updateSlider() {
    lengthPass = lengthSlider.value
}

function generatePassword() {
    let result = "";
    for(let i = 0; i < lengthPass ;i++) {
        result += dataSymbol.charAt(Math.floor(Math.random() * dataSymbol.length));
    }
    passwordInput.value = result
}

function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value)
}


copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);