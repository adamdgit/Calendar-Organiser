import { createEvent } from "@/app/prismaDB/users"

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") return Error("Wrong request method") 
  console.log(req.body)
    const data = req.body
    const { errorMsg } = await createEvent(data.email, data.date, data.description)
    if (!errorMsg) res.status(200).json("Event created successfully")
}