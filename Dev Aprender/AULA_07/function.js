// Verbo + Substantivo FORMA CORRETA DE NOMEAR

// FUNÇÃO SEM PARÂMETRO
let corSite = "azul"
function resetaCorA(){
    corSite = ""
}

console.log(corSite)
resetaCorA()
console.log(corSite)


// FUNÇÃO COM PARÂMETRO
corSite = "azul"
function resetaCorB(cor, tonalidade){
    corSite = cor +" "+ tonalidade
}

console.log(corSite)
resetaCorB("Verde","Claro")
console.log(corSite)



// CRIE UMA FUNÇÃO
let alturaPessoa = 1.65
function alturaVer(altura){
    alturaPessoa = altura
}

console.log(alturaPessoa)
alturaVer(1.8)
console.log(alturaPessoa)