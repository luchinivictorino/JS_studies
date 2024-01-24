const escola = "Cod3r"

console.log(escola.charAt(2))//charAt serve para nos mostrar qual caracter está em tal indice, começando no 0
console.log(escola.charAt(5))//o JS, ao invés de dar erro, vai apenas aparecer valor nulo caso seja um número
//fora da string

console.log(escola.charCodeAt(3))//charCodeAt serve para nos dar o valor do caracter, sendo número, símbolo ou
//letra em UNICODE
console.log(escola.indexOf('r'))//o contrário do chatAt, você informa o caracter e ele diz o indice dele 

console.log(escola.substring(1))//irá ler a string a partir do indice informado
console.log(escola.substring(0, 3))//irá ler a string a partir do primeiro indice informado e até o segundo

console.log('Escola '.concat(escola).concat('!'))//concat serve para unir (concatenar) strings
console.log('Escola ' + escola + '!')//o + vai somar as palavras e juntar elas, mas pode dar erro

console.log(escola.replace('3', 'e'))//replace serve para trocar o caracter desejado por outro

console.log('Ana,Maria,Pedro'.split(','))//split serve para dividir uma string em um array de substrings com
//base no separador indicado, no caso, a vírgula