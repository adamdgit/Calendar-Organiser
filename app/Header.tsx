'use client'

import React from 'react'
import styles from './styles.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {

  const session = useSession();

  return (
    <header className={styles.header}>
      <h1>Calendar organiser</h1>
      {session.status === 'authenticated' ? 
        <div className={styles.loginwrap}>
          <span className={styles.username}>Hello {session.data.user?.name}</span>
          <button className={styles.signin} onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}>
            Sign out
          </button>
        </div>
        : 
        <button className={styles.signin} onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000' })}>
          Sign in with Google
        </button>
      }
    </header>
  )
}
