import { Request, Response } from "express";
import { connection } from "../connection";
import { ProductClass } from "../ProductsClass";


export const registerProduct = async (req:Request, res:Response):Promise<void>=>{
    let statusCode
    try {

        let name = req.body.name
        let price = req.body.price
        let image_url = req.body.image_url

        const product:ProductClass = new ProductClass(name, price, image_url)
        

        if(!name || !price || !image_url){
            statusCode = 404
            throw new Error("Insira os dados solicitados para prosseguir:");
            
        }

        const products = await connection("labecommerce_products").insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice(),
            image_url:product.getImage()
            
        })
        res.status(201).send("Produto cadastrado com sucesso!")
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
}
