// declaração de função
/* function minhaFuncao(param){
    //bloco de código
}
minhaFuncao('Param'); */

// expressão de função
// const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1, 1));

console.log(apresentar())

/* 
    diferença principal: Hoisting
    funções e var são "listadas" no topo do arquivo
 */
function apresentar(){
    return 'Olá';
}

/* 
    vai dar erro de referência porque a const não foi declarada anteriormente
    console.log(soma(1,1))  
*/

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,1))