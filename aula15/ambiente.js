let num = [5, 8, 4]
// let i = 0
num[3] = 6
num.push(7)

console.log(`Estamos percorrendo o array num[${num}], que possui ${num.length} elementos.`)

/* while (i < num.length) {
    console.log(`O elemento de índice [${i}] é igual à ${num[i]}`)
    i++
}*/

for (let i = 0; i < num.length; i++) {
    console.log(`O elemento de índice [${i}] é igual à ${num[i]}`)
}

console.log(`Ordenando os elementos de num[${num}] fica: [${num.sort()}]`)
