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
//Menu Config
const mainMenu = document.querySelector('.menu-content');
const closeMenu = document.querySelector('.fa-times');
const openMenu = document.querySelector('.fa-bars');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'block';
}
function close(){
    mainMenu.style.display = 'none';
}
