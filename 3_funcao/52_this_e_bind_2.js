function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 500) //caso queira trocar o "self" pelo próprio "this", é só descomentar o comando e comentar a constante
}

new Pessoa
