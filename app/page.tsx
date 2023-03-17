import App from "./components/App"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getUserEvents } from "./prismaDB/users";

export default async function Home() {

  const session = await getServerSession(authOptions)
  const events = await getUserEvents(session.email)

  if (session) {
    return <App events={events[0].calendarEvent} />
  } else {
    return <div>Please login to view your calendar.</div>
  }

}
