function carregar() {
    var agora = new Date();
    var hora = agora.getHours();
    var minuto = agora.getMinutes()
    var img = document.getElementById('imagem')
    var resp = document.getElementById("atual")
    resp.innerHTML = `Agora são: ${hora}:${minuto}`

    if (hora >= 12 && hora < 19) {
        img.src = 'foto-tarde.png'
    }
    else if (hora >= 19) {
        img.src = "foto-noite.png"
    }
    else if (hora < 12) {
        img.src = "foto-dia.png"
    }
}


function Verificar() {
    var ano = new Date()
    var atual = ano.getFullYear()
    var nasci = Number(document.getElementById('nascimento').value)
    var idade = atual - nasci
    var imgsexo = document.getElementById('imgsex')
    var detect = document.getElementById('detec')
    if (nasci > atual || nasci < 1900 || nasci.length == 0) {
        detect.innerHTML = "[ERRO] Ano de Nascimento inválido"
        imgsexo.innerHTML = ''
    }
    else {
        var sexo = document.getElementsByName("fsexo")
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
        }
        else if (sexo[1].checked) {
            genero = 'Mulher'
        }
        detect.innerHTML = `Detectamos ${genero} com ${idade} anos`

        if (idade <= 15 && genero == "Homem") {
            imgsexo.src = "foto-M0a15.png"
        }

        else if (idade > 15 && idade <= 50 && genero == "Homem") {
            imgsexo.src = "foto-M15a50.png"
        }
        else if (idade > 50 && genero == "Homem") {
            imgsexo.src = "foto-M50+.png"
        }
        if (idade <= 15 && genero == "Mulher") {
            imgsexo.src = "foto-F0a15.png"
        }

        else if (idade > 15 && idade <= 50 && genero == "Mulher") {
            imgsexo.src = "foto-F15a50.png"
        }
        else if (idade > 50 && genero == "Mulher") {
            imgsexo.src = "foto-F50+.png"
        }
    }

}
function Contar() {
    var i = Number(document.getElementById('inicio').value)
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('passo').value)
    var res = document.getElementById("contado")


    if (i.length == 0 || f.length == 0) {
        alert("[ERRO] dados inválidos, reinicie a pagina")
    }

    else if (p.length == 0 || p == 0) {
        alert("Passo inválido, será considerado passo 1")
        p = 1
        while (i <= f) {
            res.innerHTML += `${i} 👉`
            i += p
        }
        res.innerHTML += '🏁<br>'
    }
    else if (p.length != 0 || p != 0) {
        while (i <= f) {
            res.innerHTML += `${i} 👉`
            i += p
        }
        res.innerHTML += '🏁<br>'
    }
    else if (i > f) {

        while (i >= f) {
            res.innerHTML += `${i} 👉`
            i = -p
        }
        res.innerHTML += '🏁<br>'
    }
}
function Limpar() {
    var respostac = document.getElementById("contado")
    respostac.innerHTML = ""

}
function Gerar() {
    var n = Number(document.getElementById("numtab").value)
    var t = document.getElementById('tabulada')
    var c = 1
    if (n == 0) {
        t.innerHTML = "Por favor, digite um número <br>"
    }
    else {
        while (c <= 10) {
            t.innerHTML += `${n} x ${c} = ${n * c} <br>`
            c += 1
        }
        t.innerHTML += "-------------------------------<br>"
    }

}

function Limpar2() {
    var t = document.getElementById('tabulada')
    t.innerHTML = ""
}


var num = document.getElementById('fnum')
var resp1 = document.getElementById('analize')
var valores = []
var resp2 = document.getElementById('final')


function adicionar() {
    if (Number(num.value) >= 1 && Number(num.value) <= 100) {
        valores.push(Number(num.value))

        resp1.innerHTML += `${Number(num.value)}..`

    }
    else {
        alert('Número invalido')
    }
    num.value = ''
    num.focus()
    resp2.innerHTML = ''
    if (Number(num.value) in valores) {
        const SemRepetir = [...new Set(valores)]
        resp1.innerHTML = `Números adicionados:<br> ${SemRepetir}.<br>`
        
    }
    
}

function finalizar() {

    var tot = SemRepetir = [...new Set(valores)]
    var maior = valores[0]
    var menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in SemRepetir = [...new Set(valores)]) {
        soma += SemRepetir = [...new Set(valores)][pos]
        media = soma / tot.length
        if (SemRepetir = [...new Set(valores)][pos] > maior) {
            maior = SemRepetir = [...new Set(valores)][pos]
        } else if (SemRepetir = [...new Set(valores)][pos] < menor) {
            menor = SemRepetir = [...new Set(valores)][pos]
        }
    }
    resp2.innerHTML = `Foram adicionados ${tot.length} números;<br>`
    resp2.innerHTML += `Maior número: ${maior};<br>`
    resp2.innerHTML += `Menor número: ${menor};<br>`
    resp2.innerHTML += `A soma é ${soma};<br>`
    resp2.innerHTML += `A média é ${media.toFixed(2)}.`
}