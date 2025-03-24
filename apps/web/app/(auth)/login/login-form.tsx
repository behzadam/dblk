"use client";

import { Button } from "@dblk/ui/components/button";
import { signIn, useSession } from "next-auth/react";

export function LoginForm() {
  const session = useSession();

  console.log(session);

  if (session.status === "authenticated") {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="grid gap-2">
      <Button
        variant="outline"
        onClick={() => signIn("google", { callbackUrl: "/" })}
        type="button"
      >
        Continue with Google
      </Button>
      <Button
        variant="outline"
        onClick={() => signIn("github", { callbackUrl: "/" })}
        type="button"
      >
        Continue with GitHub
      </Button>
    </div>
  );
}
