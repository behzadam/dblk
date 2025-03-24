import { getSession } from "@/lib/auth";
import SignIn from "./signin";
import SignOut from "./signout";
export default async function Home() {
  const session = await getSession();
  console.log("session", session);

  if (!session) {
    return (
      <div className="flex flex-col max-w-md mx-auto">
        <div>Not logged in</div>
        <SignIn />
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-md mx-auto">
      <div>User Info: {JSON.stringify(session?.user)}</div>
      <SignOut />
    </div>
  );
}
