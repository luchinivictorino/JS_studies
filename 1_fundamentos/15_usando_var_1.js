{ 
    { 
        { 
            { 
                var sera = 'aparece?'
                console.log(sera)
            } 
        } 
    } 
}

console.log(sera)//a variável será mostrada tanto foram quanto dentro do bloco

function teste() {
    var local = 123
    console.log(local)//caso a variável esteja dentro de uma função, ela so conseguirá ser mostrada de dentro
}

teste()//isso á a chamada da função
//console.log(local)