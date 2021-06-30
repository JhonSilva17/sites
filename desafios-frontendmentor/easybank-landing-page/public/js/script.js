function toggleMenu() {
    const img = document.querySelector('.openMenu img')
    const menu = document.querySelector('  #header-nav ul ')

    if (img.getAttribute('src') === './public/assets/images/icon-hamburger.svg') {
        img.setAttribute('src', './public/assets/images/icon-close.svg')
    } else {
        img.setAttribute('src','./public/assets/images/icon-hamburger.svg')
    }
    menu.classList.toggle('ativo')

}

const buttonOpenClose = document.querySelector('.openMenu');
buttonOpenClose.addEventListener('click', toggleMenu)