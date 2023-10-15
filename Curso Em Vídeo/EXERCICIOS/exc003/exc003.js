function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','imagem')
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade <= 10){
                img.setAttribute('src', 'exc003-mulher-bebe.png')
            } else if ( idade < 21 ) {
                // Jovem
                img.setAttribute('src','exc003-mulher-jovem.png')
            } else if(idade < 50) {
                //Adulta
                img.setAttribute('src','exc003-mulher-adulta.png')
            } else {
                //Idosa
                img.setAttribute('src','exc003-mulher-idoso.png')
            }
        } else {
            genero = 'Homem'
            if (idade > 0 && idade <= 10){
                // Criança
                img.setAttribute('src', 'exc003-homem-bebe.png')
            } else if ( idade < 21 ) {
                // Jovem
                img.setAttribute('src','exc003-homem-jovem.png')
            } else if(idade < 50) {
                //Adulta
                img.setAttribute('src','exc003-homem-adulto.png')
            } else {
                //Idosa
                img.setAttribute('src','exc003-homem-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos!`;
        res.appendChild(img);
    }

}