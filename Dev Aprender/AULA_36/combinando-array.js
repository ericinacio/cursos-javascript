// COMBINANDO UM ARRAY
const primeiro = [{id:1}]
const segundo = [4,5,6]
primeiro[0].id = 10

// COMBINAR
const combinado = primeiro.concat(segundo)
console.log(combinado)

//DIVIDIR
const cortado = combinado.slice()
console.log(cortado)