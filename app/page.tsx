'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import styles from './styles.module.css'

export default function Home() {
  
  const session = useSession();
  console.log(session)

  if (session.status === 'authenticated') {
    return (
      <div>
        <h2>Hello {session.data.user?.name}</h2>
      </div> 
    )
  } else {
    return (
      <div>
        <h2>Pokemon App</h2>
        <p>description of app here..</p>
      </div>
    )
  }
}
