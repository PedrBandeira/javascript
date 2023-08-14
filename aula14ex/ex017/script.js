function tabuada() {
    var numero = parseInt(document.getElementById('numero').value)
    var resultado = document.getElementById('area')
    
    if (isNaN(numero)) {
        window.alert('Por favor digite um número!')
    } else {
        for (var i = 1; i <= 10; i++) {
            area.innerHTML += `${numero} X ${i} = ${numero*i}\n`
        }
    }
}