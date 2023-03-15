import prisma from ".";

// get users calendar events
export async function getUserEvents(email:string) {
  try {
    const events = await prisma.user.findMany({ 
      select: { calendarEvent: true },
      where: { email: email }
    })
    return { events }
  } catch (error) {
    return { error }
  }
}

// create new event for user
export async function createEvent(email:string, date: string, description: string) {
  const eventInfo = {
    email: email,
    date: date,
    description: description
  }
  try {
    await prisma.event.create({
      data: eventInfo
    })
    const { events } = await getUserEvents(email)
    return events
  } catch (error) {
    return { error }
  }
}

// get logged-in users info
export async function getUserIDByEmail(email:string) {
  try {
    const authorID = await prisma.user.findFirst({ 
      select: {
        id: true
      },
      where: { 
        email: email 
      }
    })
    return { authorID }
  } catch (error) {
    return { error }
  }
}
