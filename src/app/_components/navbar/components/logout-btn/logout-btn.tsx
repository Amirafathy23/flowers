'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

export default function Logoutbtn() {
  const session=  useSession()
  console.log(session?.data?.user?.firstName)
 
  
  return (
    <button onClick={()=>{
        signOut({
            callbackUrl:'/auth/login?callbackUrl=/dashboard'
        })
    }} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-graan-800" > {session?.data?.user?.firstName?`Hi ${session?.data?.user?.firstName} ` :''}  Logout</button>

  )
}
