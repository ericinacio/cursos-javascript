function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        //BOM DIA!
        img.src = 'exc002-manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'exc002-tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        // BOA NOITE!
        img.src = 'exc002-noite.png'
        document.body.style.background = '#515154'
    }
}