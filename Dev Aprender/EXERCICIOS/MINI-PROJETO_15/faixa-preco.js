// FAIXA DE PREÇO
// É que você crie um array de objetos de faixa de preço para que lea possa ser usado em um site igual o Mercado Livre
// faixas, tooltip

// Primeira Opção
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'até R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999},
]


// Segunda Opção (Factory Function)
function criaFaixaPreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,10000)
]


// Terceira Opção (Constructor Function)
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip
    this.minimo = minimo
    this.maximo = maximo
}
let faixas3 = [
    criaFaixaPreco('d',10,20),
    criaFaixaPreco('e',20,30),
    criaFaixaPreco('f',30,40)
]

console.log(faixas)
console.log(faixas2)
console.log(faixas3)