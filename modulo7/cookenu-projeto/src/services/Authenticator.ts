import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../models/types";

class Authenticator {
    generateToken = (payload: AuthenticatorData):string =>{
const token = jwt.sign(
    payload,
    process.env.JWT_KEY as string,
    {expiresIn: process.env.JWT_EXPIRES_IN}
)
return token

}
    getTokenData = (token: string): AuthenticatorData =>{
    const result = jwt.verify(
    token,
    process.env.JWT_KEY as string
    ) as AuthenticatorData
    return result
}
}
export default new Authenticator()