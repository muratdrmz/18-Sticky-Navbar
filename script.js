const navbarEl=document.querySelector('.navbar');
const bottomContainerEl=document.querySelector('.bottom-container');

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);
console.log(window.scrollY);

window.addEventListener('scroll',stickNav)

function stickNav(){
if (window.scrollY > bottomContainerEl.offsetTop - 50 - navbarEl.offsetHeight) {
  navbarEl.classList.add("active");
} else {
  navbarEl.classList.remove("active");
}
}

// function stickNav(){
//  console.log(window.scrollY);
// }