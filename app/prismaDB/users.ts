import prisma from ".";


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

// create functions below--

export async function createNewTeam(name: string, authorID: number) {
  try {
    const user = await prisma.team.create({ 
      data: { 
        name: name,
        authorID: authorID
      }, 
      select: { id: true } 
    })
    console.log(user)
    return { user }
  } catch ( error ) {
    return { error }
  }

}
