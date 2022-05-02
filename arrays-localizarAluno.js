const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

// includes retorna um booleano
// includes verifica se o parametro é verdadeiro ou falso
// indexOf refere-se ao número do índice do parametro

const exibeNomeNotas = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ' , sua média é ' 
        + listaDeNotasEAlunos[1][indice]
    }else {
        return "Aluno não está cadastrado!"
    }
}

console.log(exibeNomeNotas("Ana"))