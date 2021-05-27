
const signUpName = document.querySelector('#signupName');
const signUpEmail = document.querySelector('#signupEmail');
const signUpPassword = document.querySelector('#signupPassword');
const signUpBtn = document.querySelector('.signupBtn');
const inputAlert = document.querySelector('.Alert');
const nameAlert = document.querySelector('.nameAlert');
const emailAlert = document.querySelector('#EmailAlert');
const passwordAlert = document.querySelector('.passAlert');
const allInputs = Array.from(document.querySelectorAll('input'));

let users;
if(localStorage.getItem('usersList') == null){
    users = [];
}else{
    users = JSON.parse(localStorage.getItem('usersList'));
}


function signUp(){
 
   if(isMailExist() == true && validateVoidInputs() == true){
    
        addUser();
        clearInputs();
   }
}

function addUser(){
    let user = {
        username: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }
    users.push(user);
    emailAlert.innerHTML = "";
    localStorage.setItem('username',signUpName.value);
    localStorage.setItem('usersList',JSON.stringify(users));
    successAlert();
}


function isMailExist(){

    const returnedEmail = users.filter((i) => {
        return i.email == signUpEmail.value;
    });

    if(returnedEmail.length == 0){
        return true;
    }else {
        emailAlert.innerHTML = 'this email is already exist';
        return false;
    }
}



signUpBtn.addEventListener('click',signUp);

allInputs.forEach((i) => {
    i.addEventListener('focus',() => {
        inputAlert.classList.replace('d-block','d-none');
    })
})

function successAlert(){
    inputAlert.innerHTML = "Success";
    inputAlert.classList.replace('d-none','d-block');
    inputAlert.classList.replace('text-danger','text-success');
}

function clearInputs(){
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}

function validateVoidInputs(){
    if(signUpName.value && signUpEmail.value && signUpPassword.value){
        inputAlert.classList.replace('d-block','d-none');
        return true;
    }else{
        inputAlert.classList.replace('d-none','d-block');
        return false;
    }
}

