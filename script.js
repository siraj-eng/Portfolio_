const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('nav-menu');

// Toggle navbar visibility
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Change icon to "close" when menu is open
});

document.querySelectorAll('.progress-line span').forEach((bar) => {
    bar.style.transform = 'scaleX(1)'; // Assuming a default scaleX(0) in your CSS
    bar.style.transition = 'transform 1s ease-in-out';
  });
  
  // Function to update the radial progress circle
function setProgress(circleId, percentage) {
    const circle = document.querySelector(`#${circleId} .progress-circle`);
    const circumference = 251.2; // Circumference of the circle (2 * pi * 40)
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset; // Set the stroke-dashoffset to the calculated value
}

// Update radial progress for each bar
setProgress('radial-1', 90); // 90%
setProgress('radial-2', 80); // 80%
setProgress('radial-3', 70); // 70%
setProgress('radial-4', 60); // 60%
