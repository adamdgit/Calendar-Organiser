import { createEvent, getUserEvents } from "@/app/prismaDB/users"
import { NextApiRequest, NextApiResponse } from "next";
import { array, z } from "zod";

const bodySchema = z.object({
  email: z.string(),
  description: z.string(),
  date: z.string()
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return Error("Wrong request method") 

  const result = bodySchema.safeParse(req.body);
  if (result.success) {
    try {
      await createEvent(result.data.email, result.data.date, result.data.description)
      try {
        const events = await getUserEvents(result.data.email)
        res.status(200).json({ events })
      } catch (error) {
        res.status(500).json({ error })
      }
    } catch (error) {
      res.status(500).json({ error })
    }
  } else {
    console.error(result.error)
  }

} 