import { Request, Response } from "express";
import { UserInputDTO } from "../models/user";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {
    private userBusiness: UserBusiness
    constructor(){
        this.userBusiness = new UserBusiness()
    }
    public signup = async(req: Request, res: Response) =>{
        try {
            const input:UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }
            const token = await this.userBusiness.createUser(input)
            res.status(201).send({message: "Usuário criado com sucesso!", token});
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}