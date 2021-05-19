//Menu Config
const page = document.querySelector('html');
const mainMenu = document.querySelector('.menu-content');
const closeMenu = document.querySelector('.fa-times');
const openMenu = document.querySelector('.fa-bars');
const hide = document.querySelector('.times');
const see = document.querySelector('.bars');

window.onscroll = function() {
	myFunction();
};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'block';
    see.style.visibility = 'hidden';
    hide.style.visibility = 'visible';
    page.style.overflow = 'hidden';
    mainMenu.style.height = '100%'
}
function close(){
    mainMenu.style.display = 'none';
    see.style.visibility = 'visible';
    hide.style.visibility = 'hidden';
    page.style.overflow = 'visible';
    mainMenu.style.height = '9%';
}




