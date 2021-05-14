var idade = 16
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Você ainda não pode votar!')
}
else if (idade >= 16 && idade < 18 || idade >= 65) {
    console.log("Voto facultativo!")
}
else { console.log("Voto obrigatório!") }