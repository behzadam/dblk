import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@dblk/prisma";
import { PrismaClient } from "@dblk/prisma/client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const CustomPrismaAdapter = (p: PrismaClient) => {
  return {
    ...PrismaAdapter(p),
    createUser: async (data: any) => {
      return p.user.create({
        data,
      });
    },
  };
};

export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: CustomPrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        // Add proper error handling and type checking
        if (!profile || !profile.email) {
          throw new Error("Invalid profile data received from Google");
        }
        return {
          id: profile.sub,
          name: profile.name || null,
          email: profile.email,
          image: profile.picture || null,
          emailVerified: profile.email_verified ? new Date() : null,
        };
      },
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (!user.email) {
        return false;
      }

      if (account?.provider === "google" || account?.provider === "github") {
        const userExists = await prisma.user.findUnique({
          where: { email: user.email },
          select: {
            id: true,
            name: true,
          },
        });

        if (!userExists || !profile) {
          return true;
        }

        if (userExists) {
          await prisma.user.update({
            where: { id: userExists.id },
            data: {
              name: profile.name,
            },
          });
        }
      }

      return true;
    },
    jwt: async ({ token, user, trigger }) => {
      if (user) {
        token.user = user;
      }

      // refresh the user's data if they update their name / email
      if (trigger === "update") {
        const refreshedUser = await prisma.user.findUnique({
          where: { id: token.sub },
        });
        if (refreshedUser) {
          token.user = refreshedUser;
        } else {
          return {};
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = {
          id: token.sub,
          // @ts-ignore
          ...(token || session).user,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
