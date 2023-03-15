import { createEvent } from "@/app/prismaDB/users"

export default async function handler(req, res) {
  if(req.method === "POST") {
    const data = req.body
    await createEvent(data.email, data.date, data.description)

    res.status(200).json({message: "event successfully created"})
  }
}