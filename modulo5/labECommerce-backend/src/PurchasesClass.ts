export class PurchasesClass {
    private id: string = Math.floor(Date.now() * Math.random()).toString(36)
    private user_id:string
    private product_id:string
    private quantity:number
    private total_price: number

    constructor(user_id:string, product_id:string, quantity:number, total_price:number){
       
        this.user_id = user_id,
        this.product_id = product_id,
        this.quantity = quantity,
        this.total_price = total_price
    }

    getId():string{
        return this.id
    }
    getUserId():string{
        return this.user_id
    }
    getProductId():string{
        return this.product_id
    }
    getQuantity():any{
        this.quantity
    }
    getTotalPrice():any{
        this.total_price
    }
}