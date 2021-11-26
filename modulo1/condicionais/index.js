// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.

// a)
// O programa solicita que o usuário insira um número e depois verifica se o mesmo é 
// divisível por 2 (resto 0)

// b)
// Para números pares. 

// c)
// Para números ímpares.

// 2.

// a)
// O código foi desenvolvido para informar o preço de acordo com a fruta escolhida.

// b)
// O preço da fruta Maçã é "R$2,25

// c)
// Iria aparecer 5 pois ele pula direto para o próximo.

// 3.

// a)
// Está solicitando ao usuário que insira um número.

// b)
// Esse número passou no teste. Se fosse -10, não apareceria nada, pois não foi dito o que deveria
// ser feito nesta condição.

// c) 
// Sim, o else não foi definido e para aparecer no console deve-se utilizar o console.log para exibir
// a próxima mensagem, caso o número inserido não corresponda com a condição definida (>0)


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

// const idadeUsuario = Number(prompt("Quantos anos você tem?"))

// const idade = idadeUsuario
// if (idade >= 18){
//     console.log("Você pode dirigir")

// } else {
//     console.log("Você não pode dirigir")
// }

// 2.



// const turnoAluno = prompt("Em qual turno você estuda? Digite M para Matutino, V para vespertino e N para Noturno:")


// if (turnoAluno === "M"){
//     console.log("Bom dia!")

// }else if (turnoAluno === "V"){
//     console.log("Boa tarde!")

// }else (turnoAluno === "N") ;{
//     console.log("Boa noite!")
// }

// 3. 

// const turnoAluno = prompt("Em qual turno você estuda? Digite M para Matutino, V para vespertino e N para Noturno:")

// switch (turnoAluno) {
//     case "M":
//         console.log("Bom dia!")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;
//     case "N":
//         console.log("Boa noite!") 
//         break;   
//     default:
//         console.log("Não consegui entender sua resposta, por favor tente novamente")
//         break;
// }

// 4.

// const generoFilme = prompt("Qual é o gênero do filme que iremos assistir?").toLowerCase()
// const precoFilme = Number(prompt("Quanto custa o ingresso?"))

// resposta1 = generoFilme === "fantasia"
// resposta2 = precoFilme <= 15

// if (resposta1 && resposta2) {
//     console.log("Bom filme!")

// }else {
//     console.log("Escolha outro filme :(")
// }