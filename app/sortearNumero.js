const menorNumero = 1
const maiorNumero = 1000

const numeroAleatorio = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorNumero + 1)
}

console.log(numeroAleatorio)

const elementoMenor = document.querySelector('#menor-valor')
const elementoMaior = document.getElementById('maior-valor')

elementoMenor.innerHTML = menorNumero
elementoMaior.innerHTML = maiorNumero
