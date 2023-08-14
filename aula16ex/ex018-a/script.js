let listagem = []
let lista = document.getElementById('lista')
let res = document.getElementById('resultado')

function adicionar() {
    let num = parseInt(document.getElementById('numero').value)

    if (isNaN(num) || num === 0 || num < 0 || num > 100 || listagem.includes(num)) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
        listagem.push(num)
        document.getElementById('numero').value = ''
    }
}

function finalizar() {
    if (listagem.length === 0) {
        window.alert('Nenhum valor foi cadastrado.')
        return
    }

    let maior = Math.max(...listagem)
    let menor = Math.min(...listagem)
    let soma = 0

    for (let c in listagem) {
        soma += listagem[c]
    }

    let media = soma / listagem.length

    res.innerHTML = `
    <p>
        Ao todo, temos ${listagem.length} números cadastrados.<br>
        O maior valor informado foi ${maior}.<br>
        O menor valor informado foi ${menor}.<br>
        Somando todos os valores, temos ${soma}.<br>
        A média dos valores digitados é ${media.toFixed(1)}.
    </p>
    `
}
