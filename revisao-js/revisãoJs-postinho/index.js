
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(1,2));    

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a,b){
    return `Na função para verificar se ${a} > ${b} é ${a>b}`
}
console.log(verificaSeEMaior(1, 2));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const nomeDoUsuario = prompt("Digite seu nome:");
const anoDeNascimento = Number(prompt("Digite o ano do seu nascimento:"));
const senhaDoUsuario = prompt("Digite uma senha:")
const nacionalidade = prompt("Qual a sua nacionalidade:").toLowerCase();

const usuario = [nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade];
console.log(usuario);



const cadastroUsuario = (usuario) => {
      
  if (usuario[1] <= 2004 && usuario[2].length >= 6 && usuario[3] === "brasileira") {
    return "Cadastro realizado com sucesso!";
  } else {
    return "Cadastro não realizado, pois informações inseridas não são válidas.";
  }
};
console.log(cadastroUsuario(usuario))
// Exercício 4-----------------------------------------------------------------------------------------------


const loginUsuario = (senha) => {
  const confirmaSenha = prompt("Confirme a sua senha para entrar:") 
  const login = senha
  if (login === confirmaSenha) {
    return "Usuário logado";
  } else {
    return "Senha inválida";
  }
};

console.log(loginUsuario(usuario[2]));


// Exercício 5----------------------------------------------------------------------------------------------------
const perguntaUsuario = prompt('Qual Vacina você tomou?').toLowerCase()

const primeiraDoseVacina = (vacina) => {
    const vacinaTomada = vacina;
    if (vacinaTomada === "coronavac") {
      const tempo= 28
      const data = "21/05/2022"
      return `Olá ${usuario[0]}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
      
      } else if (vacinaTomada === "astrazenica") {
        const tempo = 90
        const data = "22/07/2022"
        return `Olá ${usuario[0]}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    } else if(vacinaTomada === "pfizer"){
      const tempo = 90
        const data = "22/07/2022"
        return `Olá ${usuario[0]}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    } else{
      console.log('Vacina não encontrada')
    }
  }
  console.log(primeiraDoseVacina(perguntaUsuario));


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDoseVacina = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    
  const acessaUsuario = usuarios.filter((paciente)=>{
      return paciente.nome === nomeDoUsuario
    }).map((paciente) =>{
      return {...paciente, imunizacao: "completa"}
    })
    console.log(acessaUsuario)
  
  }
  segundaDoseVacina("Barbara")
// Exercício 7 --------------------------------------------------------------------------------------

  
  var avisoAosAtrasados = (usuario) => {
    
  const perguntavacina = usuario.filter((paciente)=>{
     return paciente.imunizacao === "incompleta"
   })
   const novoArray = perguntavacina
   console.log(novoArray)
  for(let i = 0; i < novoArray.length; i++){ 
   if(perguntavacina){
     console.log(`Olá ${novoArray[i].nome}! Sua imunização está ${novoArray[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
   }else{
     console.log('Não funcionou')
   }
  }
}
  var usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "completa" },
    { nome: "Carlos", imunizacao: "incompleta" }
  ]
  
  avisoAosAtrasados(usuarios)


// DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());