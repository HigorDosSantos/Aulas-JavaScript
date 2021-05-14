let num = document.getElementById('numero')
let lista = document.getElementById('flista')
let res = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
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
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }
    else { alert("Valor inválido ou já escontrado na lista.") }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar")
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            else if (valores[pos < menor]) {
                menor = valores[pos]
            }
        }
        res.innerHTML = ""
        res.innerHTML += `Foram adicionados ${tot} números na lista.<br><br>`
        res.innerHTML += `O maior número adicionado à lista é ${maior}.<br><br>`
        res.innerHTML += `O menor nùmero adicionado à lista é ${menor}.<br><br>`
        res.innerHTML += `A soma dos valores adicionados é ${soma}.<br><br>`
        res.innerHTML += `A média dos valores adicionados é ${media}.`

    }
}