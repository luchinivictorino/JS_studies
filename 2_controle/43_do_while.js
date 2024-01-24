function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //no do/while não é necessário setar um valor para a variável, apenas declará-la

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima.')