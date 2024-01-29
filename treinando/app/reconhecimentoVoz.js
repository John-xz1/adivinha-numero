window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const mensagemChute = document.querySelector('#chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onspeak);

function onspeak(e) {
    const voz = e.results[0][0].transcript;
    falando(voz);
    verificaSeValorValido(voz);
}

function falando(chute) {
    mensagemChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());
