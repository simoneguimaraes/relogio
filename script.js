function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora < 12 && hora > 0) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = './assets/foto-manha.png'
        document.body.style.background = '#ffb35c'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = './assets/foto-tarde.png'
        document.body.style.background = '#16578c'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = './assets/foto-noite.png'
        document.body.style.background = '#27005c'
    }
}

var output = document.getElementById("demo");
var slider = document.getElementById("myRange").oninput = function(){
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #e795a4 0%, #026bdb ' + value + '%, #fff ' + value + '%, #fff 100%'
    output.innerHTML = this.value;
};

