'use client'

import React from 'react'
import Link from "next/link"
import { useSession } from 'next-auth/react'
import styles from './styles.module.css'

export default function Home() {
  
  const session = useSession();
  console.log(session)

  if (session.status === 'authenticated') {
    return (
      <div>
        <h2>Hello {session.data.user?.name}</h2>
        <Link href="/api/auth/signout">Sign Out</Link>
      </div> 
    )
  } else {
    return (
      <>
        <form className={styles.form}>
          <h1>Sign in with Google</h1>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required={true} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required={true} />
        </form>
      </>
    )
  }
}
