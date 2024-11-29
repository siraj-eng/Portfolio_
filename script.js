const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('nav-menu');

// Toggle navbar visibility when menu icon is clicked
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Change the icon to "close" when the menu is open
});

// Close navbar on nav item click
document.querySelectorAll('#nav-menu a').forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // Hide the navbar
        menuIcon.classList.remove('bx-x'); // Reset the menu icon to the original state
    });
});
