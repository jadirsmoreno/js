const notas = [10, 7, 8, 5, 10]
console.log(notas)
notas.pop() // retira o ultimo elemento da lista
console.log(notas)

let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length
console.log(`A media é ${media}`)