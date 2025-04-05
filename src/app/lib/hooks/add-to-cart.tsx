
// 'use server'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// export async function addToCart(prodId: string) {
//   const session = await getServerSession(authOptions);
//   console.log('session...',session)
//   if (!session) {
//     throw new Error("User is not authenticated");
//   }

//   const response = await fetch("https://flower.elevateegy.com/api/v1/cart", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${session.token}`,
//     },
//     body: JSON.stringify({
//       product: prodId,
//       quantity: 1
//     }),
//   });

//   const payload = await response.json();
//   console.log('payload', payload);
//   return payload;
// }

