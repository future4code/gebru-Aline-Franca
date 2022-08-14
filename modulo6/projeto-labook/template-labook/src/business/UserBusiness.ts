import { v4 as generateId } from "uuid";
import { UserDataBase } from "../data/UserDataBase";



const userDataBase = new UserDataBase();
export class UserBusiness{
    async create({name, email, password}: any): Promise<void>{
        if (!name || !email || !password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         } 
         const id: string = generateId()

      await userDataBase.create({
        id, 
        name, 
        email,
        password
      } )  
    
     }
    
}