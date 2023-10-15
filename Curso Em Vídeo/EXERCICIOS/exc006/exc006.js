let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let lista = document.querySelector('#nlista')
let values = []

function addNum(){
    let n = Number(num.value)
    if (num.value.length === 0 || numList(n).exists == true || n < 0 || n > 100  ) {
        alert('Valor Inválido ou já encontrado na lista.')
    } else {
        let item = document.createElement('option')
        values.push(n)
        item.text = `Valor ${n} adicionado.`
        item.value = `lista${n}`
        lista.appendChild(item)
    }
    res.innerHTML = ''
    num.value = ''
}

function fim() {
    if (values.length === 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let maior = numList().maior
        let menor = numList().menor
        let soma = numList().soma
        let QTDElem = values.length
        let media = (soma/QTDElem).toFixed(2)
        res.innerHTML = ''
        res.innerHTML = `
        <p>Ao todo, temos ${QTDElem} números cadastrados.</p>
        <p>O maior valor informado foi ${maior}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${media}</p>
        `
    }
}

function numList(numParam){
    let soma = 0;
    let maior = values[0];
    let menor = values[0];
    let exists = false
    values.forEach(function(num) {
        soma += num
        if (num > maior) {
            maior = num
        }
        if (num < menor) {
            menor = num
        }
        if (numParam == num) {
            exists = true;
        }
    })
    return {
        soma,
        maior,
        menor,
        exists
    }
}