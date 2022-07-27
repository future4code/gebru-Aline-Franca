import { BaseDataBase } from "./BaseDataBase";
import { user } from "../types/user";


export class UserDataBase extends BaseDataBase{

    createUser= async(user:user)=>{
    try {
      await UserDataBase.connection
        .insert({
          id:user.id,
          name:user.name,
          email:user.email,
          password:user.password
        })
        .into("User_Arq");
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}