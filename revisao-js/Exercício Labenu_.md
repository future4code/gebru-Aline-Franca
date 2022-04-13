# Parte 1 -  Resumos
- [ ]  Funções em JavaScript
- [ ]  Objeto em JavaScript ⇒ Sintaxe, o que é e como usar
- [ ]  Array  ⇒ Sintaxe, o que é e como usar
- [ ]  Map  ⇒ Sintaxe, o que é e como usar
- [ ]  Filter  ⇒ Sintaxe, o que é e como usar
- [ ]  Diferenças entre Map e Filter
- [ ]  Diferença entre os métodos push e pop e como usá-los
- [ ]  Método slice do array  ⇒ Sintaxe, o que é e como usar
- [ ]  Método splice do array  ⇒ Sintaxe, o que é e como usar



## Funções em JavaScript

- Uma função é um bloco de código que pode ser chamado (ou invocado) à partir de um nome.
- Podem receber entradas, que podem ser usadas no meio do código (parâmetros e argumentos)

 ### Declarando uma função:
 
 
 ~~~JavaScript
 function calculaArea (altura, largura) {
const area = altura * largura
console.log(area)
}
~~~

### Chamando uma função:

- Podemos chamar/invocar/executar uma função usando o seu identificador.
- Quando fazemos isso, o bloco de código definido na declaração é executado

~~~JavaScript
calculaArea(2,3)
~~~

### Declaração vs. Execução

- Declarar a função não executa o código  
- Você pode chamar a função quantas vezes quiser  
- Cada chamada resulta em uma nova execução do código

### Parâmetros e Argumentos

- Parâmetros são como se fossem variáveis criadas na declaração da função  
- Argumentos são os valores passados na chamada da função  
- Cada parâmetro recebe seu valor dos argumentos, seguindo a mesma ordem

## Funções - modelo mental

- Funciona como uma caixa preta que pode receber
valores de entrada (input/parâmetros/argumentos) e
pode devolver valores de saída (output/resultado)

![aa0788695f960be47d173cf2915a0715.png](../_resources/aa0788695f960be47d173cf2915a0715.png)

# Expressões de funções

- Expressões de funções são somente uma forma
diferente (mas bem parecida) de se declarar funções
- Deve ser atribuída a uma variável e é invocada da mesma
forma que a declaração, mas usando o nome da variável
atribuída

![94ebe4560546c18d0840ddd1dd1f47f7.png](../_resources/94ebe4560546c18d0840ddd1dd1f47f7.png)

## Arrow Functions 

- Tipo de expressão de função com sintaxe simplificada
- Por ser uma expressão, deve ser atribuída a uma variável para ser invocada
-  Invocação continua a mesma

![eb7340729c9dc5a1cab554a0740a161d.png](../_resources/eb7340729c9dc5a1cab554a0740a161d.png)


### Comparação

![0d08bd0154cab297291158c17ca823b2.png](../_resources/0d08bd0154cab297291158c17ca823b2.png)

- A expressão de função só pode ser invocada depois
da sua declaração (const, let)
- A declaração de função pode ser chamada de
qualquer parte do código, mesmo antes de sua
declaração efetiva (function)



# Objetos 

- Objetos são estruturas de sintaxe que nos permitem
representar dados mais complexos de uma maneira
mais organizada
- Com os objetos conseguimos criar modelos do mundo
real de forma mais intuitiva/humanizada
- As propriedades dos objetos podem assumir
quaisquer valores
  -  String, number, boolean, array, etc.
    - Funções (neste caso, são chamados de método)

**Sintaxe da criação um objeto**
    
![9d190ef19d3e8ca89131bae026ba197b.png](../_resources/9d190ef19d3e8ca89131bae026ba197b.png)	

## Acessando e alterando propriedades

- Para acessar ou alterar as propriedades dos objetos,
há duas sintaxes interessantes:
  - Notação do ponto (a mais "comum" entre as
linguagens de programação)
  - Notação dos colchetes
	
	
## 	Redefinindo valores

![5d5672c80311da2194e994d44133d0c6.png](../_resources/5d5672c80311da2194e994d44133d0c6.png)

~~~JavaScript
instrutora.nome = ‘camis’;
instrutora['email'] = 'devcamis@gmail.com';
~~~

## Acessando objetos dentro de objetos

![ae42c1013ea6364111eba42c5fe3ca2d.png](../_resources/ae42c1013ea6364111eba42c5fe3ca2d.png)

~~~JavaScript
const pet = paiDePet.pet
console.log(pet)
const nomeDoPet = pet.nome
console.log(nomeDoPet)
~~~

## Acessando arrays dentro de objetos

![b0e7ca07a1877468f11a005344d45f8a.png](../_resources/b0e7ca07a1877468f11a005344d45f8a.png)

~~~Js
const primeiraLinguagem = curso.linguagens[0]
console.log(primeiraLinguagem) 


~~~


~~~
const linguagens = curso.linguagens
console.log(linguagens)
const primeiraLinguagem = linguagens[0]
console.log(primeiraLinguagem)
~~~

	
## Array de objetos

~~~
const instrutoras = [
 {nome: "Lais", modulo: 1},
 {nome: "Amanda",modulo: 2},
 {nome: "Chijo",modulo: 3}
]
const nomeInstrutora = instrutoras[0].nome
console.log(nomeInstrutora)
~~~

## Adicionando propriedades 

Para adicionar propriedades aos objetos, podemos
usar a seguinte sintaxe

~~~
const curso = {
 nome: "Noturno Frontend",
 linguagens: ["JS", "CSS", "HTML"]
}
~~~


- Notação de ponto: `curso.numeroEstudantes = 50`
- Notação de colchetes: `curso['numeroEstudantes'] = 50`

## Espalhamento ou spread

- Existe uma sintaxe interessante, através da qual
conseguimos realizar uma cópia de um objeto (ou
array) inteiro
- Feita essa cópia, podemos manipular ela da maneira
que quisermos (ex: mudar ou adicionar propriedades)
- Essa sintaxe é chamada de espalhamento (ou
spread)
	
### Espalhamento - objetos

![8ce237c87b4d124895fd00b1ac019edd.png](../_resources/8ce237c87b4d124895fd00b1ac019edd.png)

### Espalhamento - arrays

![623f61f98890cb5f0a6b2af195368a96.png](../_resources/623f61f98890cb5f0a6b2af195368a96.png)

# Arrays

#### O que são arrays?
**Arrays são listas de elementos**
- Ex: lista de compras, lista de alunos, lista de números
da loteria, lista telefônica…
- No javascript, usamos colchetes para agrupar os itens
de uma lista:

~~~
const listaDeCompras = ["batata", "alface", "queijo"]
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]
~~~

- Podemos colocar elementos de qualquer tipo que
vimos até agora dentro de um array!
  - Números, strings e booleanos 
 - Também podemos ter elementos de tipos diferentes
dentro de um mesmo array

- Em um array, acessamos os elementos através da
posição deles na lista!
- Funciona como se fosse uma lista numerada:

![3801038282ab4343e56c8a92fdf990ec.png](../_resources/3801038282ab4343e56c8a92fdf990ec.png)

- Mas no caso dos arrays, a numeração
não começa no 1, mas sim no 0!
- Para acessar um item, colocamos a sua posição
(índice) entre colchetes após o nome do array

~~~
const listaDeCompras = ["batata", "alface", "queijo"]
const segundoItem = listaDeCompras[1] // "alface"
~~~

## Protótipo de Arrays 

- O javascript nos fornece algumas informações
(propriedades) e ações (métodos) que podemos
realizar sobre uma lista (array)

### Propriedade length

- A propriedade length nos diz qual é a quantidade de
itens de um array

~~~
const pokemon = ["bulbasauro", "squirtle", "charmander"]
console.log(pokemon.length) // 3
~~~

### Método includes(elemento)

- O método includes(elemento) determina se um
array contém um determinado elemento, retornando
true ou false

~~~
const seriesBoas = ["Breaking Bad", "Brooklyn Nine-nine"]
seriesBoas.includes("Breaking Bad") // true
seriesBoas.includes("Game of Thrones") // false
~~~

### Método push(elemento)

- O método push(elemento) adiciona um ou mais
elementos ao final de um array

~~~
const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros) // [1, 2, 3, 4]
numeros.push(5, 6, 7)
console.log(numeros) // [1, 2, 3, 4, 5, 6, 7]
~~~

### Método pop() 

- O método pop() remove o último elemento de um
array

~~~
const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes) // ["palhaço", "mandarim"]
~~~

### Método splice(i, n) 

- O método splice(i, n) remove n elementos à partir da
posição i do array

~~~
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6 7
letras.splice(2, 1)
// letras = ["A", "B", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6
letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"]
~~~

# Map

- Existem 2 funções que só podem ser usadas
em arrays:
  - map()
  - filter()

### map

- Definição: map significa "mapear"
- Utilização: quando queremos criar um NOVO array
baseado em informações do array original
- Output: um novo array com tamanho igual ao
tamanho do array original
  - Precisamos guardar esse array em algum lugar!
  
  - nput: somente uma função de callback
- Esta função pode receber três parâmetros
- primeiro: corresponde ao valor do elemento do array
naquela etapa do loop (item)
- segundo: o valor do índice daquele elemento (index)
- terceiro: o array original em si (array)
- Esta função deve obrigatoriamente retornar algum valor

![3b0c32859393c0016ae065c802fa0411.png](../_resources/3b0c32859393c0016ae065c802fa0411.png)

# filter

 Definição: filter significa "filtrar"
- Utilização: quando queremos criar um NOVO array
retirando (ou não) alguns itens do array original
- Output: um novo array com tamanho igual ou
menor ao tamanho do array original
- Precisamos guardar esse array em algum lugar!

- Input: somente uma função de callback
- Esta função pode receber três parâmetros
   - primeiro: corresponde ao valor do elemento do array
naquela etapa do loop (item)
   - segundo: o valor do índice daquele elemento (index)
  - terceiro: o array original em si (array)
- Esta função deve retornar um boleano (true/false)

![f83102ee78f38ebe2bc62636edbb0e17.png](../_resources/f83102ee78f38ebe2bc62636edbb0e17.png)

## Diferenças entre Map e Filter

O map cria um novo array com elementos modificados em relação ao original
- Tamanho do array: Igual ao original

O filter cria um novo array com alguns elementos do original
- Tamanho do array: igual ou menor que o original

## Diferença entre o método push e pop

O método push(elemento) adiciona um ou mais elementos no final do array enquanto o método pop() remove o último elemento do array

**push(elemento)**

~~~
const numeros = [1,2,3]
numeros.push(4)
console.log(numeros) // [1,2,3,4]
~~~

pop()

~~~
const meusPeixes = ['palhaço', 'mandarim', 'esturjao']
meusPeixes.pop()
console.log(meusPeixes) // ['palhaço', 'mandarim']
~~~

## Método Slice()

Permite “fatiar” uma string ou array e recuperar parte dos seus elementos.

O método slice() percorre a string ou o array para selecionar a faixa de valores determinada por parâmetro. Lembre-se que a primeira posição de um array é a posição de número 0. Considerando o seguinte código:

~~~
const carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"];
const selecionados = carros.slice(2, 4);
~~~

O array atribuído à variável selecionados será: ['Focus', 'Jetta'], conforme a Figura

![98a94264fdd8cff6d12f8a76b1526681.png](../_resources/98a94264fdd8cff6d12f8a76b1526681.png)

## Método splice(i, n)

O método splice(i, n) remove n elementos à partir da
posição i do array

~~~
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6 7
letras.splice(2, 1)
// letras = ["A", "B", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6
letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"]
~~~
