function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nascimento')
    var res = document.getElementById("resposta")
    var img = document.getElementById("imagem")
    if (fano.value.length == 0 || fano.value > ano) {
        res.innerHTML = "[ERRO] Verifique os dados e tente novamente"
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        if (idade < 15 && genero == 'Homem') {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos `
            img.src = "foto-M0a15.png"
        }
        else if (idade < 15 && genero == 'Mulher') {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos `
            img.src = "foto-F0a15.png"
        }
        if (idade >= 15 && idade <= 50 && genero == 'Homem') {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos `
            img.src = "foto-M15a50.png"
        }
        else if (idade >= 15 && idade <= 50 && genero == 'Mulher') {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos `
            img.src = "foto-F15a50.png"
        }
        if (idade > 50 && genero == 'Homem') {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos `
            img.src = "foto-M50+.png"
        }
        else if (idade > 50 && genero == 'Mulher') {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos `
            img.src = "foto-F50+.png"
        }
    }

}