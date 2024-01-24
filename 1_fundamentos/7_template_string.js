const nome = 'Giovana'
const concatenacao = 'Olá ' + nome + '!'

const template = `Olá ${nome}!`
console.log(concatenacao, template)

//pode colocar expressões também
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)