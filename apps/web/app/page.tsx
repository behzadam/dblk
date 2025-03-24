import { getServerSession } from "next-auth";
import SignOut from "./singout";

export default async function Home() {
  const session = await getServerSession();
  console.log("session", session);

  if (!session) return <>Not logged in</>;

  return (
    <div className="flex flex-col max-w-md mx-auto">
      <div>User Info: {JSON.stringify(session?.user)}</div>
      <SignOut />
    </div>
  );
}
