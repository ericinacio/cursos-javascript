// Criar função somar que retorna a
// Soma de todos os múltiplos de 3 e 5

somar(10)
function somar(numero) {
    let soma = 0
    for(let i = 0; i <= numero; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            soma += i
        }
    }
    console.log(`A soma dos números múltiplos por 3 e 5 é ${soma}`)
}