function verificaSeValorValido(chute) {
    const numero = +chute;

    if(chute == 'game over') {
        document.body.style=`background-color:black`;
        document.body.innerHTML = `<h2>Você desistiu!</h2>
            <br>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `;
    }

    if(Number.isNaN(numero)) {
        mensagemChute.innerHTML += `<div>Está merda não é um chute válido!</div>`;
        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        mensagemChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}
            <br>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `;
    }else if(numero > numeroSecreto) {
        mensagemChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else{
        mensagemChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
}


function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})