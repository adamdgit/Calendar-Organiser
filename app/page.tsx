'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import styles from './styles.module.css'
import PokemonTeam from './components/pokemonTeam';

export default function Home() {

  const session = useSession();
  console.log(session)

  if (session.status === 'authenticated') {
    return (
      <div>
        <h2>Your Pokemon Team</h2>
        <PokemonTeam />
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
