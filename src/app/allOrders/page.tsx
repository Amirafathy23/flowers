 import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import React from 'react'

export default async  function allOrders() {
 const session= await  getServerSession(authOptions) 
  const token=session?.user?.token
 

      async   function getAllOrders(){
        const response = await fetch(`https://flower.elevateegy.com/api/v1/orders` , {
            method:'GET' ,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },

        })
           const  payload  = await response.json() ;
           console.log(payload)
           if(payload.message='success'){
            return payload.orders ;
           }
             
     } ;
    
    
    
    const AllOrders:Order[]= await getAllOrders()
    console.log('orders......' , AllOrders)
    
  return <>
<div className=" mx-auto mt-16 bg-white rounded-lg overflow-hidden  border border-gray-400">
  <div className="px-4 py-2 border-b border-gray-200">
    <h2 className="font-semibold text-gray-800">All Orders</h2>
  </div>
  <div className="flex flex-col divide-y divide-gray-200">
    {AllOrders?.map((item)=>{ return   <div key={item._id} className="flex items-center py-4 px-6">
      <img className="w-16 h-16 object-cover rounded" src={item?.orderItems[0]?.product?.imgCover} alt="Product Image" />
      <div className="ml-3">
        <h3 className="text-gray-900 font-semibold">{item?.orderItems[0].product?.title} EGP</h3>
        <p className="text-gray-700 mt-1">{item?.orderItems[0].price} EGP</p>
      </div>
      <button className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
        Remove
      </button>
    </div> })}
  
   
  </div>
  <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
    <h3 className="text-gray-900 font-semibold">Total: </h3>
    <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
      Checkout
    </button>
  </div>
</div>

  </>
}
