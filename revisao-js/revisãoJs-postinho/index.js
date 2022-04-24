
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

const primeiraDoseVacina = (nome, vacina) => {
   let confirmaVacina = prompt('Qual das três vacinas você tomou? (coronavac, Astrazenica ou Pfizer)').toLowerCase()
 
   if (confirmaVacina === 'coronavac'){
    const tempo = 28
    const data = '21/05/2022'
   } else if (confirmaVacina === 'astrazenica'){
       const tempo = 90
       const data = '22/07/2022'
   } else if (confirmaVacina === 'pfizer') {
    const tempo = 90
    const data = '22/07/2022'
   }else{
       return 'Nome da vacina  é inválida'
   }
   
   


}
console.log(primeiraDoseVacina())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());