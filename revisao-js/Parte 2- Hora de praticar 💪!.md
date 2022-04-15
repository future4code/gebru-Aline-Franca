# Exercícios de Fixação de Javascript

### Exercício 1

**Enunciado**
Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

Crie uma função que leia o número de carros vendidos por uma pessoa (``qtdeCarrosVendidos``, um número inteiro) e o valor total de suas vendas do mês (``valorTotalVendas``, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

Retorne o salário final do mês do funcionário com base nesses valores.



~~~JavaScript

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