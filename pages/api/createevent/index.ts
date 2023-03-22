import { createEvent, getUserEvents } from "@/app/prismaDB/users"

export default async function handler(req: Request, res: Response) {

  if (req.method !== "POST") return Error("Wrong request method") 
    const data = req.body
    const { errorMsg } = await createEvent(data.email, data.date, data.description)
    const events = await getUserEvents(data.email)
    if (!errorMsg) res.status(200).json(events)

}