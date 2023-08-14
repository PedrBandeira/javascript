let amigo = {}
amigo = {
    nome: 'Pedro',
    idade: 28,
    sexo: 'M',
    peso: 115.0,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

console.log(amigo)
amigo.engordar(2)
console.log(`Meu nome é ${amigo.nome}, tenho ${amigo.idade} anos e ${amigo.peso}kg`)