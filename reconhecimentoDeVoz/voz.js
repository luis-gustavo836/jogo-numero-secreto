const elementoChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const chute = e.results[0][0].transcript
    exibirChuteNaTela(chute)
    verificarSeONumeroEvalido(chute)
}

function exibirChuteNaTela(chute){
    elementoChute.innerHTML = `<div>voce disse:</div>
    <span class="box">${chute}</span>`
}

recognition.addEventListener('end', () => recognition.start())