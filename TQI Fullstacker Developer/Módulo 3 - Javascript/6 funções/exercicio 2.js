//dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.name} terá ${this.idade + anos} anos de idade.`;
}
const pessoa1 = {nome:'maria',idade:30}
const pessoa2 = {nome:'carla',idade:26}
const animal = {nome:'fiona',idade:5,raça:'pug'}

//teste
console.log(calculaIdade.call(pessoa2,30))
console.log(calculaIdade.apply(animal,[30]))