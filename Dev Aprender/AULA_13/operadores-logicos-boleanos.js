// OPERADORES LÓGICOS -- BOLEANOS
// &&(E) - RETORNA TRUE SE OS DOIS OPERANDOS FOREM VERDADEIROS
let maiorDeIdade = true
let possuiCarteiraDeTrabalho = true
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho
console.log(podeAplicar)

// ||(OU) - RETORNA TRUE SE UM DOS DOIS OPERANDOS FOREM VERDADEIROS
podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho
console.log(podeAplicar)

// !(NOT) - RETORNA TRUE SE UM DOS DOIS OPERANDOS FOREM VERDADEIROS
let candidatoRecusado = !podeAplicar
console.log(candidatoRecusado)
