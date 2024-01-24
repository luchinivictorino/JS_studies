const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//indefinido pois ainda não existe o indice 4 no array

valores[4] = 10
console.log(valores)
console.log(valores.length)//length é para mostrar quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//para tirar o último elemento do array
delete valores[0]//para deletar o valor desejado do array
console.log(valores)

console.log(typeof valores)// em js, o array é considerado objeto