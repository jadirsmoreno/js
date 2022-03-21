//Atualizando lista(Arrays)

const listaDeChamada = ['João', 'Ana', 'Caio',
'Lara', 'Marjorie', 'Leo']



// splice 3 parametros => primeiro indice da array -
// qual indice vai deletar - e pode inserir outro item na array

//listaDeChamada.splice(2, 0, 'Rodrigo')
//console.log(`Lista de chamada: ${listaDeChamada}`)
// consegue adicionar no intervalo dos indices da array um novo item


listaDeChamada.splice(1, 2,'Rodrigo') 
console.log(`Lista de chamada: ${listaDeChamada}`)