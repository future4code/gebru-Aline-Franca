// EXERCÍCIOS TYPESCRIPT

//EXERCÍCIO 01

// function usersInfo(nome:string, birthDate:string){
//     const data = birthDate.split("/")
    
//     const frase = `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês ${data[1]} do ano de ${data[2]}.`
//     console.log(frase)
// }
// usersInfo("Aline", "28/09/1995")

//EXERCÍCIO 02

// function recebeParametro (numeroAleatorio:number){
//     const resultado = typeof numeroAleatorio
//     console.log(`O tipo da variável recebida nesta função é ${resultado}`)
// }
// recebeParametro(6)

//EXERCÍCIO 03

// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }

// type filmes= {
//     nomeFilme: string,
//     anoLancamentoFilme: number,
//     generoFilme: string,
//     pontuacaoFilme?: number
// }

// function filmesInfo (nome:string, anoLancamento:number, genero:string, pontuacao?:number){
//     const filmes:filmes = {
//         nomeFilme: nome,
//         anoLancamentoFilme: anoLancamento,
//         generoFilme: genero,
//         pontuacaoFilme:pontuacao
//     }
//     console.log(filmes) 
//     }   
//     filmesInfo("Homem-Aranha", 2022, GENERO.ACAO, 90)

// EXERCÍCIO 4

// let array = [
// 	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
// ]

// enum Setores {
//     MARKETING = "marketing",
//     VENDAS = "vendas",
//     FINANCEIRO = "financeiro"
// }

// type pessoas = {
//     nome: string,
//     salário: number,
//     setor: Setores,
//     presencial: boolean
// }

// const retornaMarketing =(listaFuncionarios:pessoas[]) =>{
//     return listaFuncionarios.filter((funcionario:any)=>funcionario.setor===Setores.MARKETING && funcionario.presencial)
// }




// EXERCÍCIO 5

let usersArray = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type users ={
    name: string,
    email: string,
    role: string
}

function selecionaAdmin (array:users[]){
    const admin = array.filter((ad)=>{
        return ad.role === "admin"

    }).map(ad=>{
        return ad.email
    })

}
selecionaAdmin(usersArray)

// EXERCÍCIO 6

let clientesBanco = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]