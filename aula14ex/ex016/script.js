function contar() {
    var inicio = parseInt(document.querySelector('input#inicio').value)
    var fim = parseInt(document.querySelector('input#fim').value)
    var passo = parseInt(document.querySelector('input#passo').value)
    var resultado = document.getElementById('resultado')

    while (inicio <= fim) {
        if (inicio == fim) {
            resultado.innerText += inicio + '🏴'
            inicio += passo
        } else {
            resultado.innerText += inicio + '👉'
        }
        
    }
}