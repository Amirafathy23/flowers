// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";
declare module "next-auth" {
    interface User {
      id:string
        token:string
        _id: string
        firstName: string
        lastName: string
        email: string
        gender: string
        phone: string
        photo: string
        role: string
        wishlist: unknown[]
        addresses: unknown[]
        createdAt: string

    }
    
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
   user:{
    name?:string
    id:string
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone: string;
    photo: string;
    role: string;
    wishlist: unknown[];
    addresses: unknown[];
    createdAt: string;
    token: string;
   }
    
  }
}
interface Profile{
  email:string ,
  email_verified:string ,
  name:string ,
  picture:string ,
  given_name:string ,
  family_name:string
}
declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
      /** OpenID ID Token */
      id:string
      token:string
      _id: string
      firstName: string
      lastName: string
      email: string
      gender: string
      phone: string
      photo: string
      role: string
      wishlist: unknown[]
      addresses: unknown[]
      createdAt: string
    }
  }