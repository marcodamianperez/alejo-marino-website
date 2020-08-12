const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const list = document.querySelectorAll('.menu__item a');

// show menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// hide menu
cross.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// hide menu if any of the menu-links is clicked
Array.from(list).forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});