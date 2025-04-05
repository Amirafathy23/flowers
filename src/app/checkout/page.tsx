'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

export default function Checkout() {
 const [online , setOnline] =useState(false)
    const { data: session } = useSession();
    const token =session?.user?.token
    console.log(token)
  const user:Shipping={
    street: '' ,
    phone: '' ,
    city: '' ,
    lat: '',
    long: '' ,
  }
  function handlePayment(val:Shipping){
    if(online){
      PayOnline(val)
    }
    else{
      PayCash(val)
    }
  }
 async function PayCash(val:Shipping){
    console.log(val)
    const response= await fetch (`https://flower.elevateegy.com/api/v1/orders` , {
      method:'POST' ,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body:JSON.stringify({
        shippingAddress:val
      })

    })
    const payload=await response.json()
    if(payload.message='success'){
      toast.success('you will get your order Soon ..')
      window.location.href='/allOrders'
    }
    

  }

  async function PayOnline(val:Shipping){
    console.log(val)
    const response= await fetch (`https://flower.elevateegy.com/api/v1/orders/checkout?url=http://localhost:3000` , {
      method:'POST' ,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body:JSON.stringify({
        shippingAddress:val
      })

    })
    const payload=await response.json()
    console.log(payload)
    if(payload.message='success'){
      toast.success('you will get your order Soon ..')
      window.location.href=payload?.session?.url

    }
    

  }
  const formik= useFormik({
    initialValues:user ,
    
    onSubmit:handlePayment,
  
  })
  return <>

  
    <div className='bg-gradient-to-tr  from-[#A7D477] to-white py-10'>
    <div className=' bg-white p-10  shadow-xl max-w-md py-10 mx-auto'>
        <h3 className='text-2xl  text-center uppercase font-mono my-3 font-semibold'>Shipping Address</h3>
    <form onSubmit={formik.handleSubmit} className="">
    <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.street} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="street" id="floating_street" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_street" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street</label>
      </div>
   



      <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="city" id="floating_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
      </div>
    


      <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.lat} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="lat" id="floating_lat" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_lat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Lat</label>
      </div>
  



      <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.long} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="long" id="floating_long" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_long" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Long</label>
      </div>
   



      
  
    
      <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone :</label>
      </div>
   
    


     

   
    
    
      <button onClick={()=>{setOnline(true)}} type="submit" className="text-white  my-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 w-full dark:focus:ring-green-800">Pay Online</button>
      <button onClick={()=>{setOnline(false)}} type="submit" className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 w-full dark:focus:ring-green-800">Pay Cash</button>

    </form>
    </div>
    
    </div>
    
      
      
      
      </>
}
