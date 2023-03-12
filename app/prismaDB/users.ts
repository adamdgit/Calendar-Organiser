import prisma from ".";

// TODO: remove / repurpose later
export async function getTeam(authorID:string) {
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

}
