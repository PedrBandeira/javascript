// Variáveis
var nomes = ['Pedro', 'Lucas', 'Neide', 'Zuca', 'Sophia', 'Valentina', 'Laylla']
var a = 0
var b = 0
/* Output
[0] = Pedro
[1] = Lucas
[2] = Neide
[3] = Zuca
[4] = Sophia
[5] = Valentina
[6] = Laylla
*/
// While - Estrutura de Repetição com Teste Lógico no Início
console.log('Repetição com While')
while (a < nomes.length) {
    console.log(`[${a}] = ${nomes[a]}`)
    a++
}

// -----------------------------------------------------------
// Do While - Estrutura de Repetição com Teste Lógico no Final
console.log('Repetição com Do While')
do {
    console.log(`[${b}] = ${nomes[b]}`)
    b++
} while (b < nomes.length)

// -----------------------------------------------------------
// For
console.log('Repetição com For')
for (var i = 0; i < nomes.length; i++) {
    console.log(`[${i}] = ${nomes[i]}`)
}

// -----------------------------------------------------------