// Declaração de função:
// 1) Declara a função:
function imprimeTexto(texto){
    console.log(texto)
}

// 2) executa a função (1 ou  + vezes)
imprimeTexto('Oi!');
imprimeTexto('Outro texto');

// três formas de escrever funções



function soma(){
    return 2 + 2;
}
console.log(soma());


imprimeTexto(soma()); // função dentro de função