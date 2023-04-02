import App from "./components/App"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getUserEvents } from "./prismaDB/users";

export default async function Home() {

  let events = undefined;
  const session = await getServerSession(authOptions)
  
  if (session !== null) {
    if (session?.user?.email !== null && session?.user?.email !== undefined) {
      try {
        const data = await getUserEvents(session?.user?.email)
        events = data
        console.log(events)
      } catch (error) {
        console.error(error)
      }
    }
    return <App events={events} />
  } else {
    return <div>Please login to view your calendar.</div>
  }

}
