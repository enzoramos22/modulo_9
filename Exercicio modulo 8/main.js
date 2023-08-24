const form = document.getElementById('form')
const contatoNome = []
const contatoNumero = []

let linhas = ''
form.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionarContato()

    adicionarNumero()

    atualizaTabela()

    verificarDados()
})

function adicionarContato(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (contatoNome.includes(inputNomeContato.value)) {
        alert(`O Nome de contato ${inputNomeContato.value} ja foi inserido!`)
    } else {
        contatoNome.push(inputNomeContato.value)
        contatoNumero.push(inputNumeroContato.value)

    let linha = '<tr>'
    linha += `<td> ${inputNomeContato.value}</td>`
    linha += `<td> ${inputNumeroContato.value}</td>`

    linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function adicionarNumero(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (contatoNumero.includes(inputNumeroContato.value)) {
        alert(`O Numero de contato ${inputNumeroContato.value} ja foi inserido!`)
    } else {
    contatoNome.push(inputNomeContato.value)
    contatoNumero.push(inputNumeroContato.value)

    let linha = '<tr>'
    linha += `<td> ${inputNomeContato.value}</td>`
    linha += `<td> ${inputNumeroContato.value}</td>`

    linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function verificarDados(){
    console.log(contatoNome)
    console.log(contatoNumero)
}