//fazer com variável é melhor por causa da praticidade.

//sem variável
console.log(19.9 * 0.6);

//com variável
let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);
//

let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria + ", Preço: " + preco + 
    ", %Desconto: " + desconto + ", Preço com desconto: " + precoComDesconto);