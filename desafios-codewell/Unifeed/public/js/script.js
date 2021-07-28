const menu = document.querySelector('#navigation')
const iconToggle = document.querySelectorAll('.icon')
const allLinksMenu = document.querySelectorAll('#navigation ul li a')

iconToggle.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.toggle('ativo')
    })
})
allLinksMenu.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.toggle('ativo')
    })
})