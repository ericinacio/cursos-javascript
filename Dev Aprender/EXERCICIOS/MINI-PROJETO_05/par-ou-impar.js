// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

exibirTipo(4)

function exibirTipo(numero){
    for(let i = 0; i <= numero; i++){
        if (i % 2 === 0 ){
            console.log(`${i} É PAR`)
        } else {
            console.log(`${i} É ÍMPAR`)
        }
    }
    
}