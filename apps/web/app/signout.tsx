"use client";
import { Button } from "@dblk/ui/components/button";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <Button
      onClick={async () => {
        await signOut({
          callbackUrl: "/login",
          redirect: true,
        });
      }}
    >
      Sign Out
    </Button>
  );
}
