console.log("Trabalhando com listas");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array( // Criando lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // Adicionando um item na lista

console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // [DELETAR ITENS DA LISTA] Posição(começa em 0), numero de itens
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
