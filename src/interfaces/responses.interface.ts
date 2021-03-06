/* Interfaces */
import { Product } from "../pages/Products/interfaces/product.interface";

/* Interface of all server responses (improve typescript) */
export interface GenericResponse {
    response : number,
    content : {
        message : string            
    }
}
export interface LoginResponse {
    response : number,
    content : {
      expiresIn: number,
      token: string,
      phone: number ,
      id:string          

    }
}

export interface CreateProductResponse {
    response : number,
    content :{
        message: string,
        product : any 
    }
}

export interface ProductResponse {
    _id :string,
    status : string,
    price : number,
    description : string
}
export interface GetProductsReponse {
    response : number,
    content :{
        products : [Product] 
    }
}
export interface UpdateProductReponse {
    response : number,
    content :{
        product : Product 
    }
}


