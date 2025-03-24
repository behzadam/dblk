"use client";
import { Button } from "@dblk/ui/components/button";
import { signIn } from "next-auth/react";

export default function SignOut() {
  return (
    <Button
      onClick={async () => {
        await signIn("google");
      }}
    >
      Sign In
    </Button>
  );
}
