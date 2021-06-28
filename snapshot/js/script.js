function tabNavGallery() {
    const buttons = document.querySelectorAll('.js-button')
    const sections = document.querySelectorAll('.js-container')
    const ativo = 'ativo'
    buttons[0].classList.add(ativo)
    sections[0].classList.add(ativo)

    function initTabNav(parametro) {
        sections.forEach(item => item.classList.remove(ativo))
        buttons.forEach(item=> item.classList.remove(ativo))

        sections[parametro].classList.add(ativo)
        buttons[parametro].classList.add(ativo)
    }

    buttons.forEach((item, index)=> {
        item.addEventListener('click', ()=> {
            initTabNav(index)
        })
    })
}
tabNavGallery()