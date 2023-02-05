import prisma from ".";

export async function getUser(email:string) {
  try {
    const user = await prisma.user.findUnique({ 
      where: { 
        email: email 
      }
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function getTeam(authorID:number) {
  try {
    const team = await prisma.team.findFirst({ 
      select: {
        name: true,
        pokemon: {
          select: {
            name: true
          }
        }
      },
      where: { 
        authorID: authorID 
      }
    })
    return { team }
  } catch (error) {
    return { error }
  }
}


export async function createUser(email: string, name: string) {
  try {
    const user = await prisma.user.create({ 
      data: { 
        email: email,
        name: name
      }, 
      select: { id: true } 
    })
    console.log(user)
    return { user }
  } catch ( error ) {
    return { error }
  }

}
