function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12 && hora > 0) {
        img.src = './assets/foto-manha.png'
        document.body.style.background = '#efd451'
    } else if (hora >= 12 && hora < 18) {
        img.src = './assets/foto-tarde.png'
        document.body.style.background = '#7f62b6'
    } else {
        img.src = './assets/foto-noite.png'
        document.body.style.background = '#003e7c'
    }
}