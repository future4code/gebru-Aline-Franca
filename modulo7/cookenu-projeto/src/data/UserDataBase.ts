import { BaseDatabase } from "./BaseDataBase";
import { User } from "../models/user";
import { CustomError } from "../error/CustomError";



export class UserDataBase extends BaseDatabase {
   
    public insertUser = async (user: User)=>{
        try {
            await UserDataBase.connection
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            }).into("cookenu_users");
        } catch (error:any) {
           throw new CustomError(400, error.sqlMessage);
            
        }
    }

    public findUserByEmail = async(email:string) =>{
        try {
            const result = await UserDataBase.connection("cookenu_users")
            .select()
            .where({email})
            return result[0]

        } catch (error:any) {
         throw new CustomError(400, error.sqlMessage);   
        }

    }
}