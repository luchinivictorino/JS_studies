//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec() {
    const saudacao = 'eae' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Guilherme',
    idade: 20,
    peso: 67,
    endereco: {
        logradouro: 'Rua pica',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)