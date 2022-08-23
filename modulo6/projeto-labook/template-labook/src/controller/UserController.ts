import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

const userBusiness = new UserBusiness();
export class UserController{
   async create (req: Request, res: Response): Promise<void> {
    try {
        let message = "Success!"
        const { name, email, password } = req.body

        await userBusiness.create({ email, name, password });

        res.status(201).send({ message })

    } catch (error:any) {
        res.status(400).send(error.message);
    }
   }
}