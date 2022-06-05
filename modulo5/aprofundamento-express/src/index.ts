import express from "express";
import cors from "cors";
import {Request, Response} from "express"





const app = express(); //habilita o express
app.use(express.json()); //forma que comunicaremos json
app.use(cors())




//subir o servidor
app.listen(3003, ()=>{
    console.log("Servidor em funcionamento")
})