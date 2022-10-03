export class PersonClass {
    id: string = Math.floor(Date.now() * Math.random()).toString(36)
    name: string
    email: string
    password: string


constructor(name:string, email:string, password:string){
    this.name = name
    this.email = email 
    this.password = password
}

getId():string{
    return this.id
}
getName():string{
    return this.name
}
getEmail():string{
    return this.email
}
getPassword():string{
    return this.password
}
}