const form = document.getElementById('form');
const numero = document.getElementById('NumeroA');
const numeroMaior= document.getElementById('NumeroB');
const acerto = document.getElementById('numero-maior')
const erro = document.getElementById('numero-menor')

function maiorNumero(numero, numeroMaior){
    return numeroMaior > numero;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let numeroEMaior = maiorNumero(numero.valueAsNumber, numeroMaior.valueAsNumber)
    if(numeroEMaior){
        acerto.style.display = 'block';
    }
})

form.addEventListener('submit', function(e){
    let numeroEMaior= maiorNumero(numero.valueAsNumber, numeroMaior.valueAsNumber)
    if (!numeroEMaior){
        erro.style.display = 'block'
        acerto.style.display = 'none'
    } else{
        erro.style.display = 'none'
    }
})