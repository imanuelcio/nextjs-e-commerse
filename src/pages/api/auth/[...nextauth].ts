import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { loginWithGoogle, signIn } from "@/services/auth/services";
import jwt from "jsonwebtoken";

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        passowrd: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as unknown as {
          email: string;
          password: string;
        };
        const user: any = await signIn(email);
        if (user) {
          const confirmPassword = await compare(password, user.password);
          if (confirmPassword) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.phone = user.phone;
        token.image = user.image;
        token.role = user.role;
        token.id = user.id;
      }
      if (account?.provider === "google") {
        const data = {
          id: profile.id,
          fullname: profile.name,
          email: profile.email,
          image: profile.picture,
          type: "google",
        };

        await loginWithGoogle(data, (data: any) => {
          (token.id = data.id),
            (token.fullname = data.fullname),
            (token.email = data.email),
            (token.role = data.role),
            (token.image = data.image);
        });
      }

      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("phone" in token) {
        session.user.phone = token.phone;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      if ("image" in token) {
        session.user.image = token.image;
      }

      if ("id" in token) {
        session.user.id = token.id;
      }

      const accessToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || "", {
        algorithm: "HS256",
      });

      session.accessToken = accessToken;

      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOption);
