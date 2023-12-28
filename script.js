// Toggle class active navbar
const navbarNav = document.querySelector ('.navber');

// Ketika Hamburger Menu di Klik 
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const Hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// header
let list = document.querySelector('.slide .list');
let item = document.querySelectorAll('.slide .list .item');
let dots = document.querySelectorAll('.slide .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = item.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()}, 5000);
function reloadSlider(){
    let checkLeft = item[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slide .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(() => {next.click()}, 5000);
}
dots.forEach((li, key) => {
    Li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})