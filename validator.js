const password = document.querySelector('#password');
const confPassword = document.querySelector('#confirm-pwd');
const errorMessage = document.querySelector("span.error");

confPassword.addEventListener('input', (e)=>{
    if(password.value != confPassword.value){
        errorMessage.textContent = "*Passowords do not match";
    } else {
        errorMessage.textContent = "";
    }
});