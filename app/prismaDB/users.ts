import prisma from ".";

// get users calendar events
export async function getUserEvents(email:string) {
  try {
    const events = await prisma.user.findMany({ 
      select: {calendarEvent: true},
      where: { email: email }
    })
    return { events }
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
