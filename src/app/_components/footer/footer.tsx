import Image from 'next/image'
import React from 'react'
import appStore from '../../../assets/appstore.png'
import americanexpress from '../../../assets/americanexpress.png'
import googleplay from '../../../assets/googleplay.png'
import paypal from '../../../assets/paypal.png'
import mastercard from '../../../assets/mastercard.png'

export default function Footer() {
  return <>

  <div className=' p-20 '>
    <h2 className='text-2xl font-bold'>Get The FreshCart App</h2>
    <p className='text-gray-400 my-4'>We will send you a link, Open it in your phone to download App</p>

<form className="   flex-col md:flex md:flex-row text-center  ">   

    
<div className="md:w-[75%]">
  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email"  />
</div>


<div className='md:w-[25%] w-full md:my-0 my-3'>
<button type="submit" className=" w-full     items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
  Share App Link
  </button>
</div>
</form>
<div className="bg-white rounded-lg shadow-sm dark:bg-gray-900 mt-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <span className="self-center  font-semibold whitespace-nowrap dark:text-white">Payment Partners</span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
         <Image src={mastercard} alt='app store'  width={110}/>
        </li>
        <li>
        <Image src={paypal} alt='app store' width={110}/>
        </li>
        <li>
        <Image src={americanexpress} alt='app store' width={110}/>
        </li>
        <li>
        </li>
      </ul>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
      <li>Get deliveries with FreshCart</li>

        <li>
         <Image src={appStore} alt='app store'  width={150}/>
        </li>
        <li>
        <Image src={googleplay} alt='app store' width={150}/>
        </li>
      
      
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Fresh Cart</a>. All Rights Reserved.</span>
  </div>
</div>












  </div>
  




  </>
}
