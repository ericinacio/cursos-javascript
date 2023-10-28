// Velocidade máxima de 70
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Math.Floor(n)
// Caso os pontos forem maior ou igual a 12 á carteira será suspensa
verificarVelocidade(130)

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    const KmPorPonto = 5
    const pontosMaximo = 12
    if (velocidade >= velocidadeMaxima ){
        const pontos = Math.floor((velocidade - velocidadeMaxima) / KmPorPonto)
        if (pontos >= pontosMaximo) {
            console.log(`CARTEIRA SUSPENSA!!! Pois foi multado em ${pontos} pontos.`)
        } else {
            console.log(`Multado em ${pontos} pontos.`)
        }
    } else {
        console.log('Não levou multa')
    }
}