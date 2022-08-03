import express from "express";
import cors from "cors";

const app = express()
app.use(express.json());
app.use(cors());

const server = app.listen(3003, ()=>{
    if(server){
    console.log("Servidor funcionando")
    }else{
        console.log("Ocorreu um erro ao iniciar o servidor")
    }
})
export default app