function verificarSeONumeroEvalido(chute){
    const numero = +chute

    if(numeroInvalido(numero)){
        elementoChute.innerHTML += '<div> valor precisa ser um número </div>'
        
        return
    }
    if(numeroForMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>numero invalido: o número precisa estar entre ${menorNumero} e ${maiorNumero}</div>`

        return
    }
    if(numero === numeroAleatorio){
        document.body.innerHTML = `
        <h2>voce acertou!</h2>
        <h3>O número secreto era ${numero}</h3>

        <button id="jogar-novamente" class="jogar-novamente">recomeçar</button>
        `
    } else if(numero > numeroAleatorio){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQuePermitido(numero) {
    return numero > maiorNumero || numero < menorNumero
}

document.body.addEventListener('click', (e) => {
    if(e.target.id === 'jogar-novamente'){
        window.location.reload()
    }
})
