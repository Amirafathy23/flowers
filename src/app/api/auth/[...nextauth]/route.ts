// import { ApiResponse } from "@/app/lib/types/api"
// import { LoginResponse } from "@/app/lib/types/auth"
// import  NextAuth, { AuthOptions } from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import type { NextAuthOptions } from "next-auth";

import { authOptions } from "@/auth";
import NextAuth from "next-auth";




  
// export const authOptions :NextAuthOptions={
//     pages:{
//         signIn:'/auth/login' ,
        
//     } ,
//     providers:[
//         Credentials({
//             name:'credentials' ,
//             credentials:{
               
//                 email:{},
//                 password:{},


//             } ,
//             authorize: async (credentials)=>{
//                 console.log(credentials)
//                 const baseUrl=process.env.API + '/auth/signin'
//                 const response= await fetch(baseUrl ,{
//                     method:'POST' , 
//                     cache:'no-cache' ,
//                     body:JSON.stringify({
//                         email:credentials?.email,
//                         password:credentials?.password,
//                     }) ,
                    
//                     headers:{
//                         'Content-Type':'application/json'
//                     }
                   
//                 })
//                 const payload :ApiResponse<LoginResponse>=await response.json()
//                 if(payload.message =='success'){
//                     return {
//                         token:payload.token ,
//                         ...payload.user
//                     }
//                 }
//                 throw new Error(payload.error)
//                 // return {
//                 //     _id:'string' ,
//                 //     token:'string' ,
//                 //     id: 'string' ,
//                 //     firstName: 'string' ,
//                 //     lastName: 'string' ,
//                 //     email: 'string',
//                 //     gender: 'string',
//                 //     phone: 'string',
//                 //     photo: 'string',
//                 //     role: 'string',
//                 //     wishlist: [],
//                 //     addresses:[],
//                 //     createdAt: 'string',
//                 // }
//             } 
//             // authorize: async (credentials) => {
//             //     // 🔹 إزالة البيانات غير المطلوبة
//             //     const { email, password } = credentials as { email: string; password: string };
            
//             //     if (!email || !password) {
//             //         throw new Error("Email and password are required");
//             //     }
            
//             //     const baseUrl = process.env.API + "/auth/signin";
//             //     const response = await fetch(baseUrl, {
//             //         method: "POST",
//             //         cache: "no-cache",
//             //         body: JSON.stringify({ email, password }), // 🔹 إرسال القيم فقط
//             //         headers: {
//             //             "Content-Type": "application/json",
//             //         },
//             //     });
            
//             //     const payload: ApiResponse<LoginResponse> = await response.json();
            
//             //     if (payload.message === "success") {
//             //         return {
//             //             _id: payload.user._id,
//             //             firstName: payload.user.firstName,
//             //             lastName: payload.user.lastName,
//             //             email: payload.user.email,
//             //             gender: payload.user.gender,
//             //             phone: payload.user.phone,
//             //             photo: payload.user.photo,
//             //             role: payload.user.role,
//             //             wishlist: payload.user.wishlist,
//             //             addresses: payload.user.addresses,
//             //             createdAt: payload.user.createdAt,
//             //             accessToken: payload.token, // 🔹 وضع التوكن هنا
//             //         };
//             //     }
            
//             //     throw new Error(payload.error);
//             // },
//         })
//     ],
//     callbacks:{
//         jwt:({token,user})=>{
//            if(user){
//             token.email=user.email 
//             token.firstName=user.firstName
//             token.lastName=user.lastName
//             token.phone=user.phone
//             token.gender=user.gender
//             token._id=user._id
//             token.addresses=user.addresses
//             token.createdAt=user.createdAt
//             token.name=user.name
//             token.role=user.role
//             token.token=user.token
//             token.image=user.image
//             token.photo=user.photo
//             token.wishlist=user.wishlist
//            }
//            return token

//         },
//         session:({session , token})=>{
//             session.id=token.id
//             session.email=token.email 
//             session.firstName=token.firstName
//             session.lastName=token.lastName
//             session.phone=token.phone
//             session.gender=token.gender
//             session._id=token._id
//             session.addresses=token.addresses
//             session.createdAt=token.createdAt
//             session.role=token.role
//             session.photo=token.photo
//             session.wishlist=token.wishlist
//             session.token=token.token
            
            
//             return session
            

//         }
        
//     }

 
      
        
//     }


// const handler=NextAuth(authOptions)
// export {handler as GET , handler as POST}






const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };








