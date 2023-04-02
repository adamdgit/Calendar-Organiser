import { PrismaClient, Prisma } from "@prisma/client";
const client = new PrismaClient();

// get users calendar events
export async function getUserEvents(email:string) {
  try {
    const events = await client.user.findMany({ 
      select: { calendarEvent: true },
      where: { email: email }
    })
    if (events.length === 0) return new Error("No events found")
    return events[0].calendarEvent
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log('Error occurred')
    }
    throw error
  }

}

// create new event for user
export async function createEvent(email:string, date: Date, description: string) {
  try {
    await client.event.create({
      data: {
        authorEmail: email,
        description: description,
        date: date
      }
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log('Error occurred')
    }
    throw error
  }
}

// update event by event id
export async function updateEvent(id:string, description: string) {
  try {
    await client.event.update({
      where: { id: id },
      data: { description: description }
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log('Error occurred')
    }
    throw error
  }
}

// delete selected event by event id
export async function deleteEvent(id: string) {
  try {
    await client.event.delete({
      where: { id: id }
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log('Error occurred')
    }
    throw error
  }
}

// get logged-in users info
export async function getUserIDByEmail(email:string) {
  try {
    const authorID = await client.user.findFirst({ 
      select: {
        id: true
      },
      where: { 
        email: email 
      }
    })
    return { authorID }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log('Error occurred')
    }
    throw error
  }
}
