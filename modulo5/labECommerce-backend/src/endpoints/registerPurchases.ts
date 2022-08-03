import { Request, Response } from "express";

export const registerPurchases = async (req:Request, res: Response): Promise<void>=>{
    let statusCode
    try {
        let userId = req.body.user_id
        let productId = req.body.product_id
        let quantity = req.body.quantity
        
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
}