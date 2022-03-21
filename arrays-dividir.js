const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 
'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 
'Vinicius', 'Renan','Renata', 'Dayse', 'Camilo']

//.slice(onde começa o corte, onde termina o corte)
const sala1 = nomes.slice(0, nomes.length/2) // começa no índice 0 e vai ate a metade da lista
const sala2 = nomes.slice(nomes.length/2) // começa na metade da lista e vai até o final
// .length pega o tamanho total da array

console.log(`Número de alunos: ${nomes.length}`)
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 1: ${sala2}`)