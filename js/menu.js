const hamMenu = document.querySelector('.menu__hamburger');
const offMenu = document.querySelector('.off__menu__hamburger');

export function ativar() {
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offMenu.classList.toggle('active');
    })
}