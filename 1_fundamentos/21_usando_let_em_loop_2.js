const funcs = []

for (let i = 0; 1 < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//também não está rodando