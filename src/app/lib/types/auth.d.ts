import { User } from "next-auth"

declare interface LoginResponse{
    token:string
    user :User

}
declare interface userVal{
    firstName:string,
    lastName:string,
    phone:string | number,
    password:string,
    rePassword:string,
    email:string,
    gender:string
}
