import express from "express";
import {Request, Response } from "express";
import { connection } from "../connection";


export const getUsers = async (req:Request, res:Response):Promise<void>=>{
    let statusCode
    try {
    
        const showUsers = await connection("labecommerce_users")

        if(showUsers.length < 1){
            statusCode = 404
            throw new Error("Nenhum usuário encontrado")
        }

        res.status(200).send(showUsers)
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
}