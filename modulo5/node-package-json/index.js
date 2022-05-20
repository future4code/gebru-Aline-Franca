// EXERCICIOS NODE E package.json

// EXERCÍCIO 01
//a) Utilizamos o process.argv[""] - Dentro das chaves colocamos o número correspondente a posição
// do elemento que queremos acessar.

// b) e c)

// const nome = process.argv[2]
// const idade = process.argv[3]
// const novaIdade = Number(process.argv[3]) + 7

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade} anos.`)

// EXERCÍCIO 2

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const soma = num1 + num2

console.log(`Resposta: ${soma}`)