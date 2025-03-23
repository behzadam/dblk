import { Button } from "@dblk/ui/components/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="grid gap-6">
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
    </div>
  );
}
