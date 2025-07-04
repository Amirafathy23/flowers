// import { getToken } from "next-auth/jwt"
// import { NextRequest, NextResponse } from "next/server"

// const authPages=['/auth/login' , '/auth/register']
// const privatePages=['/', '/checkout' , '/products' , '/cart' , '/brands' , '/categories']
// export default async function middleware(request:NextRequest) {
//     const token= await getToken({req:request})
//     const url=request.nextUrl.pathname
//     if(token && authPages.includes(url)){
//         const redirectUrl=new URL('/' , request.nextUrl.origin)
//         return NextResponse.rewrite(redirectUrl)
//     }
    
//     if(!token && privatePages.includes(url)){
//         const redirectUrl=new URL('/auth/login' , request.nextUrl.origin)
//         return NextResponse.rewrite(redirectUrl)
//     }
//     return NextResponse.next()
// }


// export const config ={
//     matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
// }




import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPages = ['/auth/login', '/auth/register'];
const privatePages = ['/', '/checkout', '/products', '/cart', '/brands', '/categories'];
const role={
  admin:['/dashboard', '/dashboard/order' ,'/dashboard/products' , '/dashboard/users'] , 
  user:['/', '/checkout', '/products', '/cart', '/brands', '/categories']
}

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const pathRole = token?.role ? role[token.role] : null;

  if (!pathRole) {
    console.error('Invalid role or token:', token?.role);
  }
  // console.log('token from midl' , pathRole)
  const url = request.nextUrl.pathname;

  if (token && authPages.includes(url)) {
    const redirectUrl = new URL('/', request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl); 
  }

  if (!token && privatePages.includes(url)) {
    const redirectUrl = new URL('/auth/login', request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl); 
  }

  // authorization  
  if (token && pathRole && !pathRole.includes(url)) {
    if (url !== '/Notfound') {
      return NextResponse.redirect(new URL('/Notfound', request.nextUrl.origin));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};


