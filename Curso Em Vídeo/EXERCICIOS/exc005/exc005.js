function gerarTabuada(){
    let num = Number(document.querySelector('#txtn').value)
    let tab = document.querySelector('#seltab')
    tab.innerHTML = ''
    for (let c = 0; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value= `tab${c}`
        tab.appendChild(item)
    }
}