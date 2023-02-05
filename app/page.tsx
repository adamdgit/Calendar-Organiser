import React from 'react'
import { getUser, getTeam } from "./prismaDB/users"

export default async function Home() {
  

    const { user } = await getUser('adam_d@outlook.com')
    const { team } = await getTeam(user?.id)
    
  
  return (
    <div>
      <h1>Your Team</h1>
      {
        user && <p>{ `User: ${user?.id} ${user?.name}` }</p>
      }
      {
        team && <div>
          <p>{team.name}</p>
          {team.pokemon.map(pokemon => (
            pokemon.name
          ))}
        </div>
      }
    </div>
  )
}
