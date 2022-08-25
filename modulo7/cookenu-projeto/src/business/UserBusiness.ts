import { UserDataBase } from "../data/UserDataBase";
import { CustomError, InvalidPassword } from "../error/CustomError";
import { AuthenticatorData } from "../models/types";
import { LoginUserInputDTO, User, UserInputDTO } from "../models/user";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";


export class UserBusiness  {
    private userDataBase: UserDataBase
    constructor(){
        this.userDataBase = new UserDataBase()
    }
    public createUser = async(input: UserInputDTO) =>{
        let {name, email, password, role} = input

        if (!name || !email || !password || !role){
            throw new CustomError(422, "Por favor insira os dados solicitados")
        }

        const id = IdGenerator.generateId()
        const hash = await HashManager.generateHash(password)

        const user: User ={
            id,
            name,
            email,
            password: hash,
            role
       }
       await this.userDataBase.insertUser(user)
       const token = Authenticator.generateToken({id, role})
       return token
    }

    public login = async(input: LoginUserInputDTO) =>{
        let {email, password} = input

        const user = await this.userDataBase.findUserByEmail(email)
        const hashCompare = await HashManager.compareHash(password, user.password)

        if(!hashCompare){ 
            throw new InvalidPassword()
          }

        const payload: AuthenticatorData ={
            id:user.id,
            role: user.role
        }

        const token = Authenticator.generateToken(payload)
        return token
    }

}