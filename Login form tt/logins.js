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