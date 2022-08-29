import express from 'express'
import cors from 'cors'

const App = express()

App.use(express.json())
App.use(cors())

App.listen(3003, ()=>{
    console.log('Servidor rodando na porta 3003')
})

export default App
