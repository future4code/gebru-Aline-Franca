# Exercícios Introdução a Autenticação
#### EXERCÍCIO 01
##### a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
Resposta: O uuid é mais seguro. 

##### b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id
Resposta:
~~~~
export function generateId(): string {
    return v4();
  }
~~~~

#### EXERCÍCIO 02

##### a) O que a linha as string faz? Por que precisamos usar ela ali?
Resposta: Tipa como string. Utilizamos porque a Key deve ser uma string.

~~~~

  const expiresIn = "1min";
  const generateToken:any = (input: AuthenticationData): string =>{
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }


type AuthenticationData = {
  id: string;
}
~~~~

