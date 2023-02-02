import prisma from ".";

export async function getUser(email:string) {
  try {
    const user = await prisma.user.findUnique({ where: {email: email} })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function createUser(email:string) {
  try {
    const user = await prisma.user.create({ data: { email:email }, select: { id: true } })
    return { user }
  } catch (error) {
    return { error }
  }
}