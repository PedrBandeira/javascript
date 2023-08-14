let valores = [8, 1, 7, 4, 2, 9, 3, 0, 5, 6]

console.log(`Os elementos da array valores é [${valores}]`)
for (let i in valores) {
    console.log(`O elemento de índice [${i}] é igual à ${valores[i]}`)
}
//console.log(`Ordenando os elementos da array fica valores [${valores.sort()}]`)
console.log(`Podemos pesquisar um valor dentro de uma array, por exemplo, o valor 7 está no índice [${valores.indexOf(7)}]`)