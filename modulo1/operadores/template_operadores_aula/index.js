// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// 1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. "+ resultado) //false

// resultado = bool1 && bool2 && bool3
// console.log("b. "+ resultado) //false

// resultado = !resultado && (bool1 || bool2)
// console.log("c. "+ resultado)

// console.log("d. "+ typeof resultado) // boolean

//2.

// Será impresso ambos os números digitados lado a lado, pois toda prompt retorna uma string, por isso não será possível realizar o cálculo.

// 3. 

/* Para que funcionasse ele deveria utilizar:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

// a. let idadeUsuario = Number(prompt("Quantos anos você tem?"))
// b. let idadeAmigo = Number(prompt("Qual é a idade do(a) seu(sua) melhor amigo(a)?"))
/* c. const condicao = idadeUsuario >= idadeAmigo 
      console.log("Sua idade é maior do que a do(a) seu(sua) melhor amigo(a)? "+ condicao)
// d. console.log(idadeAmigo % idadeUsuario)
*/

// 2.

// a. let numberUser = Number(prompt("Insira um número par abaixo"))
// b. console.log(numberUser % 2)
// c. O resultado sempre será 0
// d. O resultado sempre será 1

// 3.

/*let idadeUser = Number(prompt("Quantos anos você tem?"))
//a. 
const idadeMeses = idadeUser * 12
console.log("Sua idade em meses é: "+ idadeMeses)
//b. 
const idadeDias = idadeUser * 365
console.log("Sua idade em dias é: "+ idadeDias)
//c.
const idadeHoras = idadeUser * 8760
console.log("Sua idade em horas é: "+ idadeHoras)
*/

// 4.
/*
let primeiroNumero = Number(prompt("Digite um número abaixo:"))
let segundoNumero = Number(prompt("Agora, digite outro número:"))
console.log("Primeiro número: "+ primeiroNumero)
console.log("Segundo número: "+ segundoNumero)

const condicaoA = primeiroNumero > segundoNumero
console.log("O primeiro número é maior que o segundo? "+ condicaoA)

const condicaoB = primeiroNumero === segundoNumero
console.log("O primeiro número é igual ao segundo? "+ condicaoB)

const condicaoC = primeiroNumero % segundoNumero === 0
console.log("O primeiro número é divisível pelo segundo? "+ condicaoC)

const condicaoD = segundoNumero % primeiroNumero === 0
console.log("O segundo número é divisível pelo primeiro? "+ condicaoD)
*/