function contar() {
    // Variáveis   
    var inicio = parseInt(document.querySelector('input#inicio').value)
    var fim = parseInt(document.querySelector('input#fim').value)
    var passo = parseInt(document.querySelector('input#passo').value)
    var resultado = document.getElementById('resultado')
    var inicial = inicio
    var numeros = ''
    
    // Validações
    if (isNaN(inicio) || isNaN(fim)) {
        resultado.innerHTML = '<p>Impossível contar!</p>'
    } else {
        if (passo === 0 || isNaN(passo)) {
            window.alert('Passo invalido! Considerando Passo 1')
            passo = 1
        }
        // Contagem
        while (inicio <= fim) {
            numeros += inicio
            if (inicio !== fim) {
                numeros += '👉'
            } else {
                numeros += '🏴'
            }
            inicio += passo
        }
        // Resultado
        resultado.innerHTML = `<p><strong>Contando de ${inicial} até ${fim} a cada ${passo} passo(s):</strong><br> ${numeros} </p>`
    }
}