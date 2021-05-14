function contar() {
    var i = Number(document.getElementById('inicio').value)
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('passo').value)
    var res = document.getElementById("resposta")


    if (i.length == 0 || i == 0 || f.length == 0) {
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
    else if (p.length != 0 || p != 0){
        while (i <= f) {
            res.innerHTML += `${i} 👉`
            i += p
        }
        res.innerHTML += '🏁<br>'
    }
    else if(i > f){

        while (i > f){
            res.innerHTML += `${i} 👉`
            i = -p 
        }
        res.innerHTML += '🏁<br>'
    }
}

function limpar() {
    var res = document.getElementById("resposta")
    res.innerHTML = ''
}