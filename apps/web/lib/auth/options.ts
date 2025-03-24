import { UserProps } from "@/types/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@dblk/prisma";
import { PrismaClient } from "@dblk/prisma/client";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
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
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        console.log("PProfile", profile);
        // Add proper error handling and type checking
        if (!profile || !profile.email) {
          throw new Error("Invalid profile data received from Google");
        }

        return {
          id: profile.sub,
          name: profile.name || null,
          email: profile.email,
          image: profile.picture || null,
          email_verified: profile.email_verified || false,
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (!user.email) {
        return false;
      }

      return true;
    },
    jwt: async ({
      token,
      user,
      trigger,
    }: {
      token: JWT;
      user: User | AdapterUser | UserProps;
      trigger?: "signIn" | "update" | "signUp";
    }) => {
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
      session.user = {
        id: token.sub,
        // @ts-ignore
        ...(token || session).user,
      };
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
  cookies: {
    sessionToken: {
      name: `${process.env.NEXT_PUBLIC_APP_DOMAIN ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        // When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
        // Only set domain for non-localhost environments
        ...(process.env.NEXT_PUBLIC_APP_DOMAIN &&
        process.env.NEXT_PUBLIC_APP_DOMAIN !== "localhost"
          ? { domain: `.${process.env.NEXT_PUBLIC_APP_DOMAIN}` }
          : {}),
        // Secure should be true in production/when using HTTPS
        secure:
          process.env.NODE_ENV === "production" ||
          process.env.NEXT_PUBLIC_APP_DOMAIN !== "localhost",
      },
    },
  },
};
