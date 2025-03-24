import { Session } from "@/types";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./options";

export const getSession = async () => {
  return getServerSession(authOptions) as Promise<Session>;
};
