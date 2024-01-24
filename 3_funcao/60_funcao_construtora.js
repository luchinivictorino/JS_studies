function Carro(velocidadeMaxima = 200, delta = 5) {

    //atributo privado
    let velocidadeAtual = 0

    //metodo público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log('UNO: ' + uno.getVelocidadeAtual() + 'km/h')

const ferrari = new Carro(350, 20)//para trocar os valores do delta e da velocidade maxima
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()//usado 3 vezes para aumentar a velocidade 3 vezes
console.log('FERRARI: ' + ferrari.getVelocidadeAtual() + 'km/h')