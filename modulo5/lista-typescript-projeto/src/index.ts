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

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filmes= {
    nomeFilme: string,
    anoLancamentoFilme: number,
    generoFilme: string,
    pontuacaoFilme?: number
}

function filmesInfo (nome:string, anoLancamento:number, genero:string, pontuacao?:number){
    const filmes:filmes = {
        nomeFilme: nome,
        anoLancamentoFilme: anoLancamento,
        generoFilme: genero,
        pontuacaoFilme:pontuacao
    }
    console.log(filmes) 
    }   
    filmesInfo("Homem-Aranha", 2022, "ação", 90)