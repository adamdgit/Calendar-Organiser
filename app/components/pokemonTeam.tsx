import React, { useState } from 'react'
import styles from '../styles.module.css'

interface pokemonProp {
  id: number,
  name: string,
  image: string
}

export default function PokemonTeam() {

  const [team, setTeam] = useState<pokemonProp[]>([
    { id: 0, name: '', image: '' },
    { id: 1, name: '', image: '' },
    { id: 2, name: '', image: '' },
    { id: 3, name: '', image: '' },
    { id: 4, name: '', image: '' },
    { id: 5, name: '', image: '' }
  ])

  return (
    <div className={styles.team}>
      {
        team.map(pokemon => (
          <div key={pokemon.id} className={styles.teamItem}>
            {pokemon.name}
          </div>
        ))
      }
    </div>
  )
}
