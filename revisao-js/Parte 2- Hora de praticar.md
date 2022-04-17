# Exercícios de Fixação de Javascript

### Exercício 1

~~~

  const salarioFixo = 2000
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const comissaoFixa = qtdeCarrosVendidos * 100
  const comissaoVendas = (valorTotalVendas*5) / 100
  const salarioFinal = salarioFixo + comissaoFixa + comissaoVendas
  return(salarioFinal)
}

~~~


### Exercício 2

~~~
function calculaPrecoTotal(quantidade) {
   const precoMaca = Number('1.30')
   const precoPromocao = Number('1.00')
   let compras = ''
   if(quantidade < 12){
   compras = quantidade *precoMaca
   } else{
   compras = quantidade * precoPromocao
   }
   return(compras)
 }
 ~~~
 
 ### Exercício 3
 
 ~~~
 function calculaNota(ex, p1, p2) {
let mediaPonderada = (ex * 1 + p1 * 2 + p2 * 3) / 6
let condicaoA = mediaPonderada === 9 || mediaPonderada >= 9;
let condicaoB = mediaPonderada < 9 && mediaPonderada >= 7.5;
let condicaoC = mediaPonderada < 7.5 && mediaPonderada >= 6;
  
  if (condicaoA) {
  return("A");
} else if (condicaoB) {
  return("B");
} else if (condicaoC) {
  return("C");
} else {
  return("D");
}
}
~~~

### Exercício 4

~~~
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numeroEncontrado = arrayDeNumeros.filter((x) => x === numeroEscolhido)
    .length;

  if (numeroEncontrado) {
    return("O número " + numeroEscolhido + " aparece " + numeroEncontrado + "x");
  } else{
    return('Número não encontrado')
  }
}
~~~

### Exercício 5

~~~
function criarArrayNomesAnimais() {
  const animais = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
  ]
  function retornaNomesAnimais (animal){
    return animal.nome
  }
  function exibeNomes (animais){
    const nomeAnimais = animais.map(retornaNomesAnimais)
    return nomeAnimais
  }
  return(exibeNomes(animais))
}
~~~

### Exercício 6

~~~
function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
  ];
  const terminadas = tarefas.filter((item) => {
    return item.status === "done"
  })

  const exibeTarefas = terminadas.map((item) => {
    return item.titulo
  })
  return exibeTarefas
}
~~~