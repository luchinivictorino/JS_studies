//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//número com undefined = Nan
imprimirSoma(2, 10, 4, 5, 6, 7, 8)//vai somar apenas o A e o B e ignorar o resto
imprimirSoma()//undefined com undefined = NaN

//Função com retorno
function soma(a = 0, b = 0) {//caso não seja informado o valor de algum dos índices, será interpretado como 0
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
