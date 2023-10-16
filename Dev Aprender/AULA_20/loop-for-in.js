// LOOP FOR..IN
const pessoa = {
    nome:'Eric',
    idade: 25
}

for (let k in pessoa){
    console.log(k, pessoa['nome'])
}

const cores = ['Vermelho','Azul','Verde']

for (let i in cores){
    console.log(i, cores[i])
}