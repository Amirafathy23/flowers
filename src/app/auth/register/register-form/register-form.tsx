'use client'
import React from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast';
import * as Yup from 'yup'
import { useRouter } from "next/navigation";
import { userVal } from '@/app/lib/types/auth';
export default function Registerform() {

  const router = useRouter()
  
     const user={
        firstName:'',
        lastName:'',
        phone:'',
        password:'',
        rePassword:'',
        email:'',
        gender:''
      
      }
      
      const validationSchema=Yup.object().shape({
        firstName:Yup.string().required('First name is required').min(3 ,'min 3').max(8 , 'max 8'),
        lastName:Yup.string().required('Last name required').min(3 ,'min 3').max(8 , 'max 8'),

        email:Yup.string().required('email is required').email('enter valid email'),
        phone:Yup.string().required('phone is required').matches(/^\+201[0125][0-9]{8}$/),
        password:Yup.string().required('pass required').matches(/^[A-Z][A-Za-z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/~`|-]*$/ , 'invalid password'),
        rePassword:Yup.string().required('repassword required').oneOf([Yup.ref('password')] , 'invalid rePassword') ,
        gender:Yup.string().required('gender ix required').oneOf(['male' , 'female'] , 'invalid gender')

      
      
      })
      
    async function submitForm(val:userVal){
        console.log('submit' , val)
        const response = await  fetch(`https://flower.elevateegy.com/api/v1/auth/signup` , {
          method:'POST' , 
          cache:'no-cache' ,
          body:JSON.stringify(val) ,
          
          headers:{
              'Content-Type':'application/json'
          }
        })
        const payload= await response.json()
        console.log(payload)
        if(payload.message=='success'){

          toast.success('Successffully Registered')
          router.push('/auth/login')
          
        }
        else{
          toast.error(payload.error)

        }

      }
      
      const formik= useFormik({
        initialValues:user ,
        validationSchema:validationSchema,
        onSubmit:submitForm,
      
      })
      
    return <>

  
    <div className='bg-gradient-to-tr  from-[#A7D477] to-white py-10'>
    <div className=' bg-white p-10  shadow-xl max-w-md py-10 mx-auto'>
        <h3 className='text-2xl  text-center uppercase font-mono my-3 font-semibold'>Create Account</h3>
    <form onSubmit={formik.handleSubmit} className="">
    <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.firstName} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="firstName" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
      </div>
      {formik.errors.firstName && formik.touched.firstName? <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
        {formik.errors.firstName}
    </div> :''}



      <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.lastName} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="lastName" id="floating_lname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_lname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
      </div>
      {formik.errors.lastName && formik.touched.lastName? <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
        {formik.errors.lastName}
    </div> :''}


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



      <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="rePassword" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
      </div>
      {formik.errors.rePassword && formik.touched.rePassword? <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
        {formik.errors.rePassword}
    </div> :''}
    
      <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone :</label>
      </div>
      {formik.errors.phone && formik.touched.phone? <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
        {formik.errors.phone}
    </div> :''}
    


      <div className="relative z-0 w-full mb-8 group">
        <input value={formik.values.gender} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="gender" id="floating_gender" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="floating_gender" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender :</label>
      </div>

      {formik.errors.gender && formik.touched.gender? <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
        {formik.errors.gender}
    </div> :''}
    
    
      <button type="submit" className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 w-full dark:focus:ring-green-800">Submit</button>
    </form>
    </div>
    
    </div>
    
      
      
      
      </>
}
