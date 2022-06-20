import express, { application, request } from "express";
import cors from "cors";
import {Request, Response} from "express";

const app = express();
app.use(express.json);
app.use(cors());

// criar conta

app.post("/usuarios", (req: Request, res: Response)=>{
    //lógica para criar o usuário
    // condição: >= 18, informar nome, cpf e idade de nascimento
})





app.listen(3003, ()=>{
    console.log("Servidor funcionando normalmente")
})