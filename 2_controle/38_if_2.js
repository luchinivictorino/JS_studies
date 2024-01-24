function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('Final')//se n tiver {}, só vai ler o primeiro console.log como parte do if. use {}
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {//esse ; está quebrando o código, n usar em estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)