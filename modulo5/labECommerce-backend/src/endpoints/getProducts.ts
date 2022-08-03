import { Request, Response } from "express";
import { connection } from "../connection";

export const getProducts = async (req:Request, res:Response):Promise<void>=>{
    let statusCode
    try {
        const products = await connection("labecommerce_products")

        if(products.length < 1){
            statusCode = 404
            console.log("Produtos não encontrados!")
        }
        res.status(200).send(products)

    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
}