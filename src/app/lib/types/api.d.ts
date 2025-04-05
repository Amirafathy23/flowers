import { User } from "next-auth"

declare type SuccessfullResponse={
    message: string,
    user:User , 
    token:string
}

declare type ErrorResponse={
    error: string,
}

declare type ApiResponse<T>= SuccessfullResponse <T> | ErrorResponse