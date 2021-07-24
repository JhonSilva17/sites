const icons = document.querySelectorAll('.icon')
const menu = document.querySelector('.header-navigation')

for (const icon of icons) {
    icon.addEventListener('click', ()=> {
        menu.classList.toggle('active')
    })
}