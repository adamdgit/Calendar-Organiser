import React from 'react'
import { createUser } from "./prismaDB/users"

export default async function users() {
  const { user } = await createUser('adam_d@outlook.com')

  return (
    <div>
      {
        user && <p>{ user.email }</p>
      }
    </div>
  )
}
