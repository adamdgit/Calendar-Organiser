import { deleteEvent } from "@/app/prismaDB/users"

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") return Error("Wrong request method") 
    const data = req.body
    const { errorMsg } = await deleteEvent(data.id)
    if (!errorMsg) res.status(200).json("Event created successfully")
}