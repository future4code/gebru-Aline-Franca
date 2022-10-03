import { Request, Response } from "express";
import { connection } from "../connection";
import { ProductClass } from "../ProductsClass";
import { getProducts } from "./getProducts";

export const registerPurchases = async (req:Request, res: Response): Promise<void>=>{
    let statusCode
    try {
       
         let {userId, productId, quantity} = req.body
       
    }
       catch (error:any) {
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
}