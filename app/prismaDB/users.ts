import prisma from ".";

// get users calendar events
export async function getUserEvents(email:string) {
  try {
    const events = await prisma.event.findFirst({ 
      select: {
        date: true,
        description: true,
      },
      where: { 
        authorEmail: email 
      }
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
