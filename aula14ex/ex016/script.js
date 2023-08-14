/* Meu Código:
function contar() {
    // Variáveis   
    var inicio = parseInt(document.querySelector('input#inicio').value)
    var fim = parseInt(document.querySelector('input#fim').value)
    var passo = parseInt(document.querySelector('input#passo').value)
    var resultado = document.getElementById('resultado')
    var inicial = inicio
    var numeros = ''
    
    function exibirResultado() {
        resultado.innerHTML = `<p><strong>Contando de ${inicial} até ${fim} a cada ${passo} passo(s):</strong><br> ${numeros} </p>`
    }
    // Validações
    if (isNaN(inicio) || isNaN(fim)) {
        resultado.innerHTML = '<p>Impossível contar!</p>'
    } else {
        if (passo === 0 || isNaN(passo)) {
            window.alert('Passo invalido! Considerando Passo 1')
            passo = 1
        } 

        if (inicio <= fim) {
            while (inicio <= fim) {
                numeros += inicio
                numeros += (inicio !== fim) ? '➡️' : '🏁'
                inicio += passo
            }
        } else {
            while (inicio >= fim) {
                numeros += inicio
                numeros += (inicio !== fim) ? '➡️' : '🏁'
                inicio -= passo
            }
        }
        exibirResultado()
    }  
}
*/

/* Código do CursoemVideo:*/
function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resultado')

    if (ini.ariaValueMax.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F603}`
        }
    }
}