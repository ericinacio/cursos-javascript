// Funções [ nomeação = Verbo + Substantivo ]

// Criando Função
let corSite = "azul"
function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite)
// Chamando Função
resetaCor("verde","claro");
console.log(corSite)



// Tipos de Funções

//Realiza uma tarefa e não devolve nada
function dizerNome() {
    console.log("jhonatan");
}

dizerNome();


// Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor) {
    return valor * 2;
}

// console.log(MultiplicarPorDois(5));

// Nessa função pode-se colocar o valor em uma variável
let resultado = MultiplicarPorDois(5);
console.log(resultado);