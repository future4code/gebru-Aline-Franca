
export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
 }
 
 export interface UserInputDTO {
    name: string,
    email: string,
    password: string,
    role: string
 }

 export interface LoginUserInputDTO {
    email: string,
    password: string
 }