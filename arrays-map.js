const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)
// nota == 10 ? nota : ++nota / se nota for igual a 10 ? (retorna) mantem o 10, 
// : senão adicionar 1 ponto à nota

console.log(notasAtualizadas)