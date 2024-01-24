//pessoa -> 123 > {objeto}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {objeto}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

//não é possível realizar ações em um objeto "freezado"
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)