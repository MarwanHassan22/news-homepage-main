const mobileMenuToggler = document.querySelector('.hamburger');

const mobilemenu = document.querySelector('.mobileNavMenu');
const projectsEl = document.querySelector('.projects');
const mainEl = document.querySelector('.main-section');
mobileMenuToggler.addEventListener('click', () => {
    mobilemenu.classList.toggle('is-active')
    projectsEl.classList.toggle('blur');
    mainEl.classList.toggle('blur');
});