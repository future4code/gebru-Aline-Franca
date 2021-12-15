function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const comissão = 100 + (valorTotalVendas * 5 /100)
const salario = 2000
const salarioFinal = salario + comissão
return salarioFinal
  
}
calculaSalario( 2, 130.000)
console.log(salarioFinal)