console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de Idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Não é maior de Idade e não posso vender");
}

console.log("\n\nEmbraque:");
if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa Viagem!!");
} else {
    console.log("Você não pode embarcar");
}

//      console.log(idadeComprador > 18); // [>] Maior
//      console.log(idadeComprador < 18); // [<] Menor
//      console.log(idadeComprador <= 18); // [<=] Menor que ou igual
//      console.log(idadeComprador >= 18); // [>=] Maior que ou igual
//      console.log(idadeComprador == 18); // [==] Igual
