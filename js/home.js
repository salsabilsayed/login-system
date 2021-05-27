const head = document.querySelector('.title');
const logoutBtn = document.querySelector('.logout');

const uname = localStorage.getItem('username');

head.innerHTML = `welcome ${uname}`;
logoutBtn.addEventListener('click',function(){
    location.pathname = '/index.html';
    localStorage.setItem('username','')
}
)