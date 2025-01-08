window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar_menu'),
          menuItem = document.querySelectorAll('.navbar_item'),
          hamburger = document.querySelector('.hamburger');

    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    };

    hamburger.addEventListener('click', toggleMenu);
    menuItem.forEach(item => item.addEventListener('click', toggleMenu));
});