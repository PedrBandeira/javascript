let num = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar() {

}