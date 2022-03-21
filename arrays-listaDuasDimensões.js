const alunos = ['João', 'Juliana', 'Caio', 'Ana']
                    //  [0] [1][2][3] 
const mediasDosAlunos = [10, 7, 9, 6]
                           //[0]        [1]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]
//                                              [0]                     [1]
// let listaDeNotasEAlunos = [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]]


// [0] [0] primeiramente a array listaDeNotasEAlunos acessa como índice 0 a lista
// [const alunos] e dentro da [const alunos] acessa o índice zero que é o nome João

//[1] [0] acessa a lista de índice 1 [mediasDosAlunos], dentro desta lista 
// acessa a primeira nota [10]
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)