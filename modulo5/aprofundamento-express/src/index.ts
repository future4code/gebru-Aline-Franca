import express from "express";
import cors from "cors";
import {Request, Response} from "express"
import { afazeres } from "./data";
import { v4 as generateId } from 'uuid';





const app = express(); //habilita o express
app.use(express.json()); //forma que comunicaremos json
app.use(cors())


// EXERCÍCIO 01
// app.get("/ping", (req: Request, res: Response) => {          
//     res.status(200).send("Pong! 🏓")
// })

// ------------------------------------------


app.get("/afazeres", (req:Request, res: Response)=>{
    try{
        const allTarefas = afazeres

        res.status(200).send(afazeres)
    }
    
    catch(error){
        res.status(400).end("Caso de erro")
    }
})






//subir o servidor
app.listen(3003, ()=>{
    console.log("Servidor em funcionamento")
})
