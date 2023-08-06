function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 19 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
        document.body.style.color = '#000'
        msg.style.color = '#000'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
        document.body.style.color = '#fff'
        msg.style.color = '#000'
    } else {
        // Boa noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
        document.body.style.color = '#fff'
        msg.style.color = '#000'
    }
}