function criarProduto(nome, precoTotal) {
    return {
        nome,
        precoTotal,
        desconto: (precoTotal * 0.1),
    }
}

console.log(criarProduto('Notebook', 2000.00))
console.log(criarProduto('Celular', 1000.00))