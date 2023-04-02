import { deleteEvent, getUserEvents } from "@/app/prismaDB/users"
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const bodySchema = z.object({
  id: z.string(),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return Error("Wrong request method") 

  const result = bodySchema.safeParse(req.body);
  if (result.success) {
    try {
      await deleteEvent(result.data.id)
      res.status(200).json({ message: "Event deleted" })
    } catch (error){
      res.status(500).json({ error })
    }
  }

}