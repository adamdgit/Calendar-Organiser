'use client'

import { useSession } from 'next-auth/react'
import styles from './styles.module.css'

export default function Home() {

  const session = useSession();
  console.log(session)

  if (session.status === 'authenticated') {
    return (
      <div className={styles.userTeams}>
        <h2>you are logged in</h2>
      </div> 
    )
  } else {
    return (
      <div>
        <p>Login to see your data.</p>
      </div>
    )
  }
}
