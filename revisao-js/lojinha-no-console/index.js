// Definir arrays dos produtos da lojinha

const alimentos =[
    {nome: "Arroz", volume: "5kg", preco: "R$20,00", validade: "24/04/2023", quantidade: 10},
    {nome: "Feijão", volume: "1kg", preco: "R$8,00", validade: "20/04/2023", quantidade: 8},
    {nome: "Macarrão", volume: "1kg", preco: "R$5,00", validade: "24/12/2022", quantidade: 4},
]

 const brinquedos = [
    {nome: "Bola", preco: "R$20,00", classificacaoIndicativa: "Livre", quantidade: 25},
    {nome: "Boneca", preco: "R$80,00", classificacaoIndicativa: "3 anos", quantidade: 18},
    {nome: "Carrinho", preco: "R$50,00", classificacaoIndicativa: "3 anos", quantidade: 50},
]

//------------------------------------------Iniciando o programa

// Pergunta ao usuário o que deseja fazer:
const opcaoUsuario = prompt("Seja bem vindo! Digite 1 para vitrine, 2 para compras e 3 para zerar estoque")
console.log(opcaoUsuario)

// Funções Menu 
const menuVitrine1 = (resposta) =>{
    if(resposta === "1"){
    const perguntaUsuario = prompt("VITRINE: Qual tipo de produtos deseja ver: Alimentos ou brinquedos?").toLowerCase()
    console.log(perguntaUsuario)
    
    const menuVitrine2 = (resposta)=>{
        if(resposta === "alimentos"){
        return alimentos   
        }else if(resposta=== "brinquedos"){
        return brinquedos 
        }else{
        console.log("Opção inválida")
        }
    }
    console.log(menuVitrine2(perguntaUsuario))    
    
    const continuaVisualizacao = ()=>{
        const visualizacaoConfirma = confirm("Deseja realizar outra visualização de produtos?")    
        if (visualizacaoConfirma === true){
        console.log(menuVitrine1(opcaoUsuario))
        } else{
        console.log("Obrigada pela visita!")
        }
    }
    continuaVisualizacao()
    }
    const menuCompras1 = (resposta)=>{
        if (resposta === "2"){
        const respostaCompras = prompt("COMPRAS: Qual tipo de produto deseja comprar: Alimentos ou brinquedos?").toLowerCase()    
        console.log(respostaCompras)

    const menuAlimentos = (resposta)=>{
        if(resposta === "alimentos"){
        const escolheAlimentos = prompt("Escreva o nome do alimento que deseja comprar:").toLowerCase()
        return escolheAlimentos


        //  // NÃO CONSEGUI PROSSEGUIR COM A LÓGICA DAQUI

        // for( let i = 0; i< alimentos.length; i++){
        //  const verifica = alimentos.includes[escolheAlimentos]
        //  if(verifica) {
        //     console.log("funcionou")
        // }else{
        //     console.log("Não funcionou")
        // }
        //    }
            
       
        } else if(resposta === "brinquedos"){
            const escolheBrinquedos = prompt("Escreva o nome do brinquedo que deseja comprar:").toLowerCase()
            return escolheBrinquedos
        }
    }
    menuAlimentos(respostaCompras)
    

    }
    }
    menuCompras1(opcaoUsuario)
   }

   const menuEstoque =(resposta)=>{
    if (resposta === "3"){
        const respostaEstoque = confirm("ESTOQUE: A ação seguinte apagará os dados do estoque, tem certeza que deseja prosseguir? ")
        return respostaEstoque
    }

    // NÃO CONSEGUI PROSSEGUIR COM A LÓGICA

    // if (respostaEstoque){
    //     const leProdutos = (lista1, lista2)=>{
    //         const apagaAlimentos = lista1.map((listado)=>{
    //         return {...listado, quantidade: 0}
    //     })
    //     const apagaBrinquedos = lista2.map((listado)=>{
    //         return {... listado, quantidade: 0}
    //     })
    //     console.log(apagaAlimentos)
    //     console.log(apagaBrinquedos)
    // }
    //     leProdutos(alimentos, brinquedos)
    //     }
    }
   
   menuEstoque(opcaoUsuario)
menuVitrine1(opcaoUsuario)    

