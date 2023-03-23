import { createEvent, getUserEvents } from "@/app/prismaDB/users"

export default async function handler(req: Request, res: Response) {

  let error = false;
  
  if (req.method !== "POST") return Error("Wrong request method") 
    const data = req.body
    await createEvent(data.email, data.date, data.description)
      .catch(err => error = err)
    const events = await getUserEvents(data.email)
    if (!error) res.status(200).json(events)

}