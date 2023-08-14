// Função para "Tabuada com Textarea"
function tabuadaComTextarea() {
    var numero = parseInt(document.getElementById('numero').value)
    var area = document.getElementById('area')
    var resultado = document.getElementById('resultado')
    if (isNaN(numero) || numero === 0) {
        window.alert('Por favor digite um número!')
    } else {
        area.innerHTML = ''
        if (numero > 0) {
            for (var i = 1; i <= 10; i++) {
                area.innerHTML += `${numero} X ${i} = ${numero*i}\n`
            }
        } else {
            for (var i = 1; i <= 10; i++) {
                area.innerHTML += `(${numero}) X ${i} = (${numero*i})\n`
            }
        }
    }
    resultado.innerHTML = `Tabuada do número ${numero} gerada com sucesso!⬆️`
}

// Função para "Tabuada com Select"

function tabuadaSelect() {
    let numero = parseInt(document.getElementById('numero').value)
    let tabuada = document.getElementById('tabuada')
    let resultado = document.getElementById('resultado')

    if (isNaN(numero) || numero === 0) {
        window.alert('Por favor digite um número!')
    } else {
        let c = 1
        tabuada.innerHTML = ''
        if (numero > 0) {
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${numero} X ${c} = ${numero*c}`
                tabuada.appendChild(item)
                c++
            }
        } else {
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `(${numero}) X ${c} = (${numero*c})`
                item.value = `tab${c}`
                tabuada.appendChild(item)
                c++
            }
        }
        resultado.innerHTML = `Tabuada do número ${numero} gerada com sucesso!⬆️`
    }
}