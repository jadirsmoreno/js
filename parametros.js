// parâmetros de função
function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

//parâmetro x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome}, minha idade é ${idade}`;
}

// ordem errada console.log(nomeIdade(34, 'Jadir'))
console.log(nomeIdade('Jadir', 34));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
console.log(multiplica(soma(4, 5), soma(3, 3))) // ficaria 9 x 6