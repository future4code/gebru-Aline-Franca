import connection from "./connection";
import app from "./app";


app.get("/test", (req, res)=>{
    res.status(200).send("ok")
});