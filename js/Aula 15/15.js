var num = [5, 8, 2, 9, 3]
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)
console.log(`Em ordem crescente fica: ${num.sort()}`)
console.log(`O primeiro vetor é ${num[0]}`)
num.push(1)
console.log(`${num}`)
console.log(`Em ordem crescente fica: ${num.sort()}`)
console.log(`O primeiro vetor é ${num[0]}`)
var pos = num.indexOf(3)

if (pos == -1) { console.log("O valor não foi encontrado") }
else { console.log(`O valor 3 está na posição ${pos}`) }


/* var num = [4, 5, 6, 7, 8]
 posição = 0
while (posição < num.length) {
    console.log(`A posição ${posição} tem o valor ${num[posição]}`)
    posição += 1
}

var num = [4, 5, 6, 7, 8]
for(var posição in num )
{
    console.log(`A posição ${posição} tem o valor ${num[posição]}`)
}*/