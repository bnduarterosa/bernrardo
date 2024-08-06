let nome1 = "Diego"
let sobrenome1 = "Scagliusi"
let NomeSobrenome = nome1 + " " + sobrenome1


console.log(NomeSobrenome)

//operações com  numeros
let numero1=10
let numero2=20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2 
let divisao = numero1 / numero2

console.log (soma+','+subtracao+','+multiplicacao+','+divisao)

//trabalhando com boolenos

let estaChovendo = true
if(estaChovendo){
    console.log("esta chovendo")
}else{
    console.log("não esta chovendo")
}

//uso de null e undefined

let resposta = null
let nota 
console.log(resposta, nota)


//ultilizando symbol
let idUnico = Symbol()

let produto = {
    [idUnico]: 1234
}
console.log(produto[idUnico])

//trabalho com bigInt
let grandeInteiro = BigInt("0000000020000000000000000000000000000000002000")
let numeros = grandeInteiro
console.log(grandeInteiro)
console.log(numeros)