
import {Request, Response } from "express";
import { connection } from "../connection";
import { PersonClass } from "../PersonClass";


export const createUsers = async (req:Request, res:Response):Promise<void>=>{
    let statusCode
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password

        const users:PersonClass = new PersonClass(name, email, password)

        if(!name || !email || !password){
            statusCode = 404
            throw new Error("Erro! Insira os dados para prosseguir!");
            
        }

        const result = await connection("labecommerce_users").insert({
            id: users.getId(),
            name: users.getName(),
            email: users.getEmail(),
            password: users.getPassword()
        })
        res.status(201).send("Usuário cadastrado com sucesso!")

        
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
}