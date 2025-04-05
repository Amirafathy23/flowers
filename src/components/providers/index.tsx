import React from 'react'
import NextAuthProvider from './components/next-auth-provider'
type providerProps ={
    children:React.ReactNode
}
export default function Providers({children}:providerProps) {
  return (
    <NextAuthProvider>
        {children}
    </NextAuthProvider>
  )
}