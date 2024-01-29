
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let chute;
let tentativas = 1;
console.log(numeroSecreto);
/*
while(chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10.');

    if(chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert('O número secreto é menor..');
        } else {
            alert('O número secreto é maior..')
        }
        tentativas++;
    }
}

let tentativasTexto = tentativas == 1 ? 'tentativa' : 'tentativas'
alert(`Você acertou o número secreto em ${tentativas} ${tentativasTexto}..`);
*/
// loops e tentativas