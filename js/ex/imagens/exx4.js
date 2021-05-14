function gerar() {
    var n = Number(document.getElementById("numero").value);
    var res = document.getElementById("resposta")

    //  res.innerHTML=`${n}`
    if (n == 0) {
        alert("Por favor digite um número")
    }
    else {
        var m = 1
        while (m <= 10) {
            var mult = n * m
            res.innerHTML += `${n} x ${m} = ${mult}<br>`
            m += 1
        }
        res.innerHTML += '-------------------------<br>'
    }
}
function limpar() {
    var res = document.getElementById("resposta")
    res.innerHTML = ''
}