'use client'

import React, { useState , useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Loginform() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, seterror] = useState < string |null >(null)
  const [loading , setloading] = useState < boolean >(false)
  
 
async  function handleLogin({email , password}:{email:string , password:string}){

  setloading(true)
    const response=await signIn('credentials' , {
      email:email ,
      password:password,
      redirect:false

    })

    if(response?.ok) {
      setloading(false)
      window.location.href=response.url || '/'    
        return ;
    }


    // 
    // if (response?.ok) {
    //   setloading(false)
    //   router.push(response.url || '/');
    //   router.refresh()
    //   return;
    // }
    seterror(response?.error || 'Something wrong , try again')
    setloading(false)

  }
         const user={
          
            password:'',
           
            email:'',
           
          
          }
          
          const validationSchema=Yup.object().shape({
    
            email:Yup.string().required('email is required').email('enter valid email'),
            password:Yup.string().required('passwors is required').matches(/^[A-Z][A-Za-z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/~`|-]*$/ , 'invalid Password'),
    
          
          
          })
          
       
          
          const formik= useFormik({
            initialValues:user ,
            validationSchema:validationSchema,
            onSubmit:handleLogin,
          
          })


          useEffect(() => {
            if (status === 'authenticated') {
              const role = session?.user?.role;
              if (role === 'admin') {
                router.replace('/dashboard');
              } else {
                router.replace('/');
              }
            }
          }, [status, session, router]);
    return <>
    <div className='bg-gradient-to-tr  from-[#A7D477] to-white py-10'>
  <div className=' bg-white p-10  shadow-xl max-w-md py-10 mx-auto'>
      <h3 className='text-2xl  text-center uppercase font-mono my-3 font-semibold'>Login now</h3>
  <form onSubmit={formik.handleSubmit}  className="">
  
    <div className="relative z-0 w-full mb-8 group">
      <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
    </div>
    {formik.errors.email && formik.touched.email? <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
        {formik.errors.email}
    </div> :''}




    <div className="relative z-0 w-full mb-8 group">
      <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
    </div>

    {formik.errors.password && formik.touched.password? <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
        {formik.errors.password}
    </div> :''}


  

     <button type="submit" className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 w-full dark:focus:ring-green-800"> {loading?'Loading...': 'Submit'}   </button> 
  {/* display error */}
    {error?<div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
  <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
    <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
    </path>
  </svg>
  <span className="text-red-800"> {error} </span>
</div>:''}



  <div className="flex items-center justify-between mt-8">
  <Link href="/forget-password" className="font-normal text-green-500">
  Forgot Password?
</Link>
  </div>
  
  <div>
    <div className="flex justify-evenly items-center space-x-2 w-80 mt-4">
      <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
      <span className="flex-none uppercase text-md text-gray-900 mt-4 font-semibold">or</span>
      <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
    </div>
    <div className="mt-4 w-full flex flex-col items-center  gap-3">
      <button onClick={()=>{signIn('google' , {callbackUrl:'/'})}} className="btn btn-outline w-full flex items-center justify-start pl-14 bg-white border border-gray-800 rounded-md shadow-sm max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:border-blue-700">
        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
          <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="Color-" transform="translate(-401.000000, -860.000000)">
              <g id="Google" transform="translate(401.000000, 860.000000)">
                <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path>
                <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path>
                <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path>
                <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path>
              </g>
            </g>
          </g>
        </svg>
        <span>Continue with Google</span>
      </button>
     
      
    </div>
  </div>
  
  <div className="flex items-start my-5">
    <div className="flex items-center h-5">
    </div>
    {/* <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Don't have an account <a href="#" className="text-blue-600 hover:underline dark:text-blue-500"> Register</a></span> */}
  </div>
  
   
  
   
  
  
  </form>
  </div>
  
  </div>
    </>
}
