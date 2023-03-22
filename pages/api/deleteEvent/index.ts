import { deleteEvent, getUserEvents } from "@/app/prismaDB/users"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req: Request, res: Response) {

  const session = getServerSession(authOptions)

  if (req.method !== "POST") return Error("Wrong request method") 
    const data = req.body
    const { errorMsg } = await deleteEvent(data.id)
    const events = await getUserEvents(session.email)
    if (!errorMsg) res.status(200).json(events)
}