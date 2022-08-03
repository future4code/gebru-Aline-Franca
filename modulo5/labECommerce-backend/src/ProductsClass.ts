export class ProductClass {
    id: string = Math.floor(Date.now() * Math.random()).toString(36)
    name: string
    price: number
    image_url: string

    constructor(name:string, price: number, image_url:string){
        this.name= name
        this.price= price
        this.image_url=image_url
 }

 getId():string{
    return this.id
 }
 getName():string{
    return this.name
 }
 getPrice():number{
    return this.price
 }
 getImage():string{
    return this.image_url
 }
}