// Meu código
function verificar() {
    event.preventDefault()
    var img = document.getElementById('imagem')
    var data = new Date()
    var sexoMasculino = document.getElementById('masculino')
    var sexoFeminino = document.getElementById('feminino')
    var anoNascimentoInput = document.getElementById('ano')
    var res = document.getElementById('resultado')
    res.style.textAlign = 'center'

    var anoNascimento = parseInt(anoNascimentoInput.value)
    var anoAtual = data.getFullYear()
    var idade = anoAtual - anoNascimento

    var img = document.createElement('img') // Cria um elemento img pelo javascript
    img.setAttribute('id', 'foto')

    //Verifica se o valor dado ao ano de nascimento é vazio, ou maior que ano atual, ou <= 0
    if (anoNascimentoInput.value == '' || anoNascimento > anoAtual || anoNascimento <= 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }

    if (sexoMasculino.checked) {
        if (idade <= 12) {
            img.setAttribute('src', 'foto-bebe-m.png')
            res.innerHTML = `<p>Detectamos uma criança do sexo masculino com ${idade} anos.</p>`
            res.appendChild(img)
        } else if (idade < 18) {
            img.setAttribute('src', 'foto-adolescente-m.png')
            res.innerHTML = `<p>Detectamos um adolescente do sexo masculino com ${idade} anos.</p>`
            res.appendChild(img)
        } else if (idade < 30) {
            img.setAttribute('src', 'foto-jovem-m.png')
            res.innerHTML = `<p>Detectamos um jovem adulto do sexo masculino com ${idade} anos.</p>`
            res.appendChild(img)
        } else if (idade < 60) {
            img.setAttribute('src', 'foto-adulto-m.png')
            res.innerHTML = `<p>Detectamos um adulto do sexo masculino com ${idade} anos.</p>`
            res.appendChild(img)
        } else {
            img.setAttribute('src', 'foto-idoso-m.png')
            res.innerHTML = `<p>Detectamos um idoso do sexo masculino com ${idade} anos.</p>`
            res.appendChild(img)
        }
    } else if (sexoFeminino.checked) {
        if (idade <= 12) {
            img.setAttribute('src', 'foto-bebe-f.png')
            res.innerHTML = `<p>Detectamos uma criança do sexo feminino com ${idade} anos.</p>`
            res.appendChild(img)
        } else if (idade < 18) {
            img.setAttribute('src', 'foto-adolescente-f.png')
            res.innerHTML = `<p>Detectamos um adolescente do sexo feminino com ${idade} anos.</p>`
            res.appendChild(img)
        } else if (idade < 30) {
            img.setAttribute('src', 'foto-jovem-f.png')
            res.innerHTML = `<p>Detectamos um jovem adulto do sexo feminino com ${idade} anos.</p>`
            res.appendChild(img)
        } else if (idade < 60) {
            img.setAttribute('src', 'foto-adulto-f.png')
            res.innerHTML = `<p>Detectamos um adulto do sexo feminino com ${idade} anos.</p>`
            res.appendChild(img)
        } else {
            img.setAttribute('src', 'foto-idoso-f.png')
            res.innerHTML = `<p>Detectamos um idoso do sexo feminino com ${idade} anos.</p>`
            res.appendChild(img)
        }
    } else {
        window.alert('Selecione o sexo!')
    }
}
/* 
// Código do Curso em Vídeo
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Cria um elemento img pelo javascript
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
*/