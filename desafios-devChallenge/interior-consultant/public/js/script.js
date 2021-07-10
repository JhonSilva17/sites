/* Menu Mobile- quando eu clicar no icone de abrir o menu,
quero abri-lo, ou seja adicionar a classe show ao header.
E quando eu clicar no icone de fechar o menu, quero remover
a classe show do header */
const icons = document.querySelectorAll('.icon')
const header = document.querySelector('#header')
for (const icon of icons) {
    icon.addEventListener('click', function() {
        header.classList.toggle('show')
    })  
}
/* Quando eu clicar em um link do menu, o menu irá fechar
automaticamente */
const linksMenu = document.querySelectorAll('#header a')
for (const link of linksMenu) {
    link.addEventListener('click', ()=> {
        header.classList.remove('show')
    })
}