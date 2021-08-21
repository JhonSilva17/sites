const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')
const button = document.querySelector("#btn-send")

function validateForm(event) {
    if (name.value === "" && email.value === "" && password.value === "") {
        alert("Todos os campos estão vazios. Preencha os campos")
        event.preventDefault()
    } else if (name.value === "") {
        alert("Campo vazio. Por favor, preencha o campo de NOME.")
        event.preventDefault()
    } else if (email.value === "") {
        alert("Campo vazio. Por favor, preencha o campo de EMAIL.")
        event.preventDefault()
    } else if (password.value === "") {
        alert("Campo vazio. Por favor, preencha o campo de SENHA.")
        event.preventDefault()
    }
}
button.addEventListener('click', validateForm)