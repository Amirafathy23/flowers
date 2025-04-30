import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import  GoogleProvider  from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ! ,
      clientSecret :process.env.GOOGLE_CLIENT_SECRET !

    }) ,
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Failed to authenticate");
        }

        return { ...data.user, token: data.token };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user , account , profile }) {
      console.log('acc' , account)
    
      if (account?.provider === 'google') {
        const googleProfile = profile as { 
          name?: string; 
          given_name?: string; 
          email?: string; 
          picture?: string;
        };
        token.name = googleProfile.given_name || googleProfile.name;
          return token    
      }
     else if (user) return { ...token, ...user };
      return token;
    },
    session({ session, token }) {
      return { ...session, user: token };
    },

  },
  
};