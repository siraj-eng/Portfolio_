const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('nav-menu');

// Toggle navbar visibility
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Change icon to "close" when menu is open
});
