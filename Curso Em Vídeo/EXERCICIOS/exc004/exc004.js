function contar() {
    let ini = Number(document.querySelector('#txti').value);
    let fim = Number(document.querySelector('#txtf').value);
    let passo = Number(document.querySelector('#txtp').value);
    let res = document.querySelector('#res');
    let texto = document.createElement('p')

    if (ini == 0 || fim == 0 ) {
        res.innerHTML = 'Impossível contar!';
    } else {
        res.innerHTML = "";
        texto.innerText = "Contando:"
        res.appendChild(texto)

        if (passo == 0) {
            alert('Passo Inválido! Considerando por PASSO 1')
            passo = 1
        }
        
        if (ini < fim) {
            // Contagem Crescente
            for (let c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} &#x1F449`;
            }
        } else {
            // Contagem Regressiva
            for (let c = ini; c >= fim; c -= passo) {
                res.innerHTML += `${c} &#x1F449`;
            }
        }
        res.innerHTML += `&#x1F3C1`;
    }
}
