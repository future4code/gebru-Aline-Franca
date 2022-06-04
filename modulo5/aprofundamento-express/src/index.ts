import express from "express";
import cors from "cors";
import { Request, Response} from "express";

const app = express() // agora temos todas as funcionalidades do express
app.use(express.json()) // vamos trocar inf em formato json
app.use(cors()) // habilita o cors


//endpoint
app.get("/", (req: Request, res: Response)=>{
    res.status(200).send("Ok, funcionou")
})



app.listen(3003, ()=>{
    console.log("Servidor funcionando")
})