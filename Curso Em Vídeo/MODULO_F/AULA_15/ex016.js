let num = [5, 8, 2, 9, 3]

/*
num[3] = 6 // ADICIONAR NA ARRAY NA 3º CASA
num.push(7) // ADICIONAR NA ARRAY NA ULTIMA CASA
num.length // QUANTOS ELEMENTOS TEM NA ARRAY
num.sort() // ORDENAR EM ORDEM CRESCENTE OS ELEMENTOS
num.indexOf(8) // BUSCAR A POSIÇÃO DO VALOR NA ARRAY (NULO É IGUAL A -1)
*/
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
