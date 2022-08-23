
import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/idGenerator";



const userDataBase = new UserDataBase();
const idGenerator = new IdGenerator();

export class UserBusiness{
    async create({name, email, password}: any): Promise<void>{
        if (!name || !email || !password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         } 
    const id: string = idGenerator.generateId()

    await userDataBase.create({
        id, 
        name, 
        email,
        password
      } )  
    
     }
    
}