// app/dashboard/page.tsx

'use server'

import React from 'react'
import { getServerSession } from 'next-auth'

import Image from 'next/image'

import Link from 'next/link'
import { authOptions } from '@/auth'



export default async function Dashboard() {
   const session = await getServerSession(authOptions)
  
  // إذا لم يكن هناك جلسة أو إذا كان الدور غير admin، يمكنك إعادة توجيه المستخدم
  // if (!session || session.user?.role !== 'admin') {
  //   return <div>You are not authorized to access this page.</div>
  // }



  return (
    <div className="flex h-screen pt-14 bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="flex items-center justify-center py-5">
          {/* <Image src={logo} height={50} width={60} alt="FreshCart Logo" /> */}
        </div>
        <ul className="space-y-4 px-4">
          <li>
            <Link href="/dashboard" className="text-white hover:bg-gray-700 p-2 rounded">Dashboard</Link>
          </li>
          <li>
            <Link href="dashboard/order" className="text-white hover:bg-gray-700 p-2 rounded">Orders</Link>
          </li>
          <li>
            <Link href="/dashboard/products" className="text-white hover:bg-gray-700 p-2 rounded">Products</Link>
          </li>
          <li>
            <Link href="/dashboard/users" className="text-white hover:bg-gray-700 p-2 rounded">Users</Link>
          </li>
         
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div>
            <span className="text-gray-800">{session?.user?.name}</span>
            <Link href="/auth/login">
              <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stat 1: Orders */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Total Orders</h2>
            <p className="text-4xl font-bold">order</p>
          </div>

          {/* Stat 2: Users */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Total Users</h2>
            <p className="text-4xl font-bold">users</p>
          </div>

          {/* Stat 3: Revenue */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Revenue</h2>
            <p className="text-4xl font-bold">Revenue</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="border-b pb-2">
              <span className="font-semibold">Order #123</span> - New order placed.
            </li>
            <li className="border-b pb-2">
              <span className="font-semibold">User #567</span> - New user registered.
            </li>
            <li className="border-b pb-2">
              <span className="font-semibold">Product #890</span> - New product added.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
