// Variáveis que irei precisar para fazer os cálculos
let billInput = document.querySelector('#billInput');
let numberPeople = document.querySelector('#people');
let buttonsSelect = document.querySelectorAll('.button');
let custom = document.querySelector('#inputCustom');
let buttonReset = document.querySelector('button.reset');
let outputAmount = document.querySelector('.res-amount');
let outputTotal = document.querySelector('.res-person');
const spanErro = document.querySelector('.error')
const classInput = document.querySelector('.input')
let amount, person;
// Retorna para mim qual o valor do button clicado
const valueButton = buttons => {return buttons.value};
// Transforma qualquer número em valor monetário
const convertCurrenty = (value) => {
    let valor = Number(value)
    let currency = valor.toLocaleString('PT-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    return currency
}

// Função responsável por fazer todos os cálculos
function calc() {
    buttonsSelect.forEach(item => {
        item.addEventListener('click', () => {
            if (billInput.value != '') {
                spanErro.style.display = 'none'
                classInput.style.border = '2px solid hsl(185, 41%, 97%)'

                let amountPercentual = ((billInput.value * valueButton(item)) / 100) 
                let amountTotal = amountPercentual / (numberPeople.value || 1)
                outputAmount.innerText = convertCurrenty(amountTotal)
                let totalPeople = (billInput.value / (numberPeople.value || 1)) + amountTotal
                outputTotal.innerText = convertCurrenty(totalPeople)
            } else {
                spanErro.style.display = 'inline-block'
                classInput.style.border = '2px solid hsl(345, 80%, 60%)'
            }
            
        })
    })   
}
calc()

// Função que irá limpar todos os campos digitados
function reset() {
    billInput.value = ''
    numberPeople.value = ''
    custom.value = ''
    outputAmount.innerHTML = "R$ 0,00"
    outputTotal.innerHTML = "R$ 0,00"
}
buttonReset.addEventListener('click', reset)