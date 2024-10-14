// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark Mode Toggle
const toggleSwitch = document.getElementById('theme-toggle');
toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    //to save the theme preference in localStorage so it persists across page reloads
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Preserve user theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
}