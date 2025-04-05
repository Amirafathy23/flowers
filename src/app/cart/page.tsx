
import React from 'react'
import CartActions from './components/CartActions';

export default async function Cart() {
  // async function  getCartItems(){
  //   const response = await fetch("https://flower.elevateegy.com/api/v1/cart", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${session?.token}`,
  //     },
     
  //   });
  
  //   const payload = await response.json();
  //   if(payload.message=='success'){
  //     return payload
  //   }
  //   else{
  //      throw new Error("Failed to fetch cart");
  //   }
  
  // }
  // const cartItems:CartType= await getCartItems()

  return (
    <CartActions/>
  )
}
