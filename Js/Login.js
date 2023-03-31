let login = document.querySelector('.login');
let create = document.querySelector('.create');
let loginContainer = document.querySelector('.loginContainer');

login.onclick = function(){
  loginContainer.classList.add('formsignIn');
}

create.onclick = function(){
  loginContainer.classList.remove('formsignIn');
}