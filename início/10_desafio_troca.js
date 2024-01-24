//Trocar os valores das variáveis A e B.
let a = 7;
let b = 94;

let temp = a;//essa variável temporária vai servir para armazenar o valor de A para que não ocorra algum erro

a = b;
b = temp;

//também pode ser feito assim: [a, b] = [b, a]

console.log(a);
console.log(b);