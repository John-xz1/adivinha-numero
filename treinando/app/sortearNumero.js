//variaveis para os numeros do span
const menorValor = 1;
const maiorValor = 100;
//variavel para o numero secreto
const numeroSecreto = secretarNumero()
//variaveis para trocar o numero span diretamente na tela
const spanMenorValor = document.getElementById('menor-valor');
const spanMaiorValor = document.getElementById('maior-valor');
spanMenorValor.innerHTML = menorValor;
spanMaiorValor.innerHTML = maiorValor;

function secretarNumero() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto)