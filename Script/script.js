function abrir(){
    var fechado = window.document.getElementById('imgfechada')
    fechado.style.display = 'none'
    var aberto = window.document.getElementById('imgaberta')
    aberto.style.display = 'block'

    var linksabrir = window.document.getElementById('links1')
    linksabrir.style.display = 'block'
}

function fechar(){
    var aberto = window.document.getElementById('imgaberta')
    aberto.style.display = 'none'
    var fechado = window.document.getElementById('imgfechada')
    fechado.style.display = 'block'

    var linksfechar = window.document.getElementById('links1')
    linksfechar.style.display = 'none'
}