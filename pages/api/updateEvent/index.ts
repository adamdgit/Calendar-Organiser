import { getUserEvents, updateEvent } from "@/app/prismaDB/users"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req: Request, res: Response) {

  const session = getServerSession(authOptions)
  let error = false;
  
  if (req.method !== "POST") return Error("Wrong request method") 
    const data = req.body
    await updateEvent(data.id, data.description)
      .catch(err => error = err)
    const events = await getUserEvents(session.email)
    if (!error) res.status(200).json(events)

}