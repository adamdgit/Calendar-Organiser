import prisma from ".";

// get users calendar events
export async function getUserEvents(email:string) {
  try {
    const events = await prisma.user.findMany({ 
      select: { calendarEvent: true },
      where: { email: email }
    })
    return events
  } catch (error) {
    return { error }
  }
}

// create new event for user
export async function createEvent(email:string, date: string, description: string) {
  let errorMsg: boolean | any = false;
  try {
    await prisma.event.create({
      data: {
        authorEmail: email,
        date: date,
        description: description
      }
    })
  } catch (error) {
    errorMsg = error
  }
  return { errorMsg }
}

// update event by event id
export async function updateEvent(id:string, description: string) {
  let errorMsg: boolean | any = false;
  try {
    await prisma.event.update({
      where: { id: id },
      data: { description: description }
    })
  } catch (error) {
    errorMsg = error
  }
  return { errorMsg }
}

// delete selected event by event id
export async function deleteEvent(id: string) {
  let errorMsg: boolean | any = false;
  try {
    await prisma.event.delete({
      where: { id: id }
    })
  } catch (error) {
    errorMsg = error
  }
  return { errorMsg }
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
