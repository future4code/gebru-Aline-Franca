export type transacao = {
    valor: number,
    data: Date,
    descricao: string
}


export type contaUsuario = {
    nome: string,
    CPF: string,
    dataNascimento: Date,
    saldo: number,
    extrato: Array<transacao>

}



