// https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-2
// npm install json-server -g
// https://cursos.alura.com.br/formacao-programacao?preRequirementFrom=js-backend


/*
function seraUmPalindromo(palavra) {
    console.log(palavra);
    var separandoPalavra = palavra.split('');
    console.log(separandoPalavra);
    var palavraReverse = separandoPalavra.reverse();
    console.log(palavraReverse);
    palavraReverse = palavraReverse.join('');
    console.log(palavraReverse);
    if(palavra == palavraReverse) {
        console.log(`A palavra ${palavra} é um palíndromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }

    console.log(separandoPalavra);
}

seraUmPalindromo('rede');
*/

let ul = document.querySelector('#salve');
console.log(ul);

let x = [8,3,4,5,6,7];
console.log(x)

function xxx(arr, num) {
    console.log(arr[num - 1])
}
xxx(x, 3)