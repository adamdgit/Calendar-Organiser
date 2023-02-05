import React from 'react'
import { getUser } from "./prismaDB/users"

export default async function Home() {
  const { user } = await getUser('adam_d@outlook.com')
  
  return (
    <div>
      <h1>Your Team</h1>
      {
        user && <p>{ user?.id }</p>
      }
    </div>
  )
}
