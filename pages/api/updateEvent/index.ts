import { updateEvent } from "@/app/prismaDB/users"

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") return Error("Wrong request method") 
    const data = req.body
    const { errorMsg } = await updateEvent(data.id, data.description)
    if (!errorMsg) res.status(200).json("Event updated successfully")
}