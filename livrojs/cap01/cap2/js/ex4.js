 //c) Elaborar um programa para uma loja, o qual leia o preço de um produto
// e informe as opções de pagamento da loja. Calcule e informe o valor para
// pagamento à vista com 10% de desconto e o valor em 3x.
const preco = Number(prompt('qual o preço do item'))
const desconto = preco - ((preco*10)/100)
const parcelas = preco/3
alert(`pode pagar em debito com 10% de desconto fica ${desconto.toFixed(2)} \n e credito dividido em 3x com parcelas de ${parcelas.toFixed(2)}`)
