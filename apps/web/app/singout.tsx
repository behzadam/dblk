"use client";
import { Button } from "@dblk/ui/components/button";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <Button
      onClick={() =>
        signOut({
          callbackUrl: "/login",
        })
      }
    >
      Sign Out
    </Button>
  );
}
