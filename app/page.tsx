import App from "./components/App"
import { getUserEvents } from "./prismaDB/users"
export default async function Home() {

  const { events } = await getUserEvents('adammdemol@gmail.com')
  console.log(events[0].calendarEvent)

  return (
    <App calendarEvents={events[0].calendarEvent}/>
  )
}
