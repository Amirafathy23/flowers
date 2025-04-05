'use client'
import { useCartMutations } from '@/app/cart/components/CartActions'
import React from 'react'

export default function AddCartBtn({prodId}:{prodId:string}) {
  const {addToCart}=useCartMutations()
  
// async  function addProdToCart(prodId:string){
//   const response= await addToCart(prodId)
//   console.log(response)

//   if(response.message=='success'){
//     toast.success('product added successfully')
//   }
//   else{
//     toast.error('Something wrong , try again')

//   }
//   }
 
  return <>
   <div className="mt-4 px-5 pb-5">
  <button onClick={()=>{addToCart.mutate(prodId)}}   className="flex items-center  w-full justify-center rounded-md bg-green-900 my-2 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</button>

  </div>
  </>
}
