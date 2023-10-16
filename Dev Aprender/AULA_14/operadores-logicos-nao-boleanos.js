// OPERADORES LÓGICOS -- NÃO BOLEANOS
// Falsy (undefined, null, 0, false, ''(VAZIO), NaN(NOT A NUMBER))
console.log(false || null)

//Truthy
console.log(false || 1) // SEMPRE CONSIDERA A PRIMEIRA CONDIÇÃO
let corPersonalizada = ''
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)

