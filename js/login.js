const loginEmail = document.getElementById('loginemail');
const loginPass = document.getElementById('loginpassword');
const loginBtn = document.querySelector('.login');
const alert = document.querySelector('.Alert');
const voidAlert = document.querySelector('.voidAlert');



const usersList = JSON.parse(localStorage.getItem('usersList'));
const username = localStorage.getItem('username');
let userName;

function checkUser(){
    if(validateVoidInputs()){
        let userlogin = {
            email: loginEmail.value,
            password: loginPass.value
        }
    
        for(user of usersList){
            if(user.email.toLowerCase() === userlogin.email.toLowerCase() && user.password.toLowerCase() === userlogin.password.toLowerCase()){
                localStorage.setItem('username',user.username);
                alert.classList.replace('d-block','d-none');
               location.pathname = "/home.html";
               
            }else{
                alert.classList.replace('d-none','d-block');
            }
        }
        clearInput();
    }
}




function clearInput(){
    loginEmail.value = "";
    loginPass.value = "";
}

function validateVoidInputs(){
    if(loginEmail.value && loginPass.value){
        voidAlert.classList.replace('d-block','d-none');
        return true;
    }else{
        voidAlert.classList.replace('d-none','d-block');
        return false;
    }
}

