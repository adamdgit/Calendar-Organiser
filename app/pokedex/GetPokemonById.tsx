import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import { PokemonDataProps } from '@/types';

export default function GetPokemonById({ data } : { data: PokemonDataProps }) {

  return (
    <main className={styles.mainContent}>
      {
        data && 
        <div className={styles.pokemonInfo}>
          <h2 style={{textAlign: 'center'}}>{data?.name.toUpperCase()}</h2>
          <div className={styles.spritesContainer}>
            <Image 
              key={data.id}
              src={data?.sprite} 
              alt={data?.name + "sprite"} 
              width={96} height={96}
            />
            <Image 
              key={data.id + 'shiny'}
              src={data?.shiny} 
              alt={data?.name + "shiny sprite"} 
              width={96} height={96}
            />
          </div>
          <span className={styles.heading3}>Stats</span>
          <div className={styles.stats}>
            {
              data?.stats.map((stat, i) => {
                return <span key={i}>{stat.stat.name + ': ' + stat.base_stat}</span>
              })
            }
          </div>
          <span className={styles.heading3}>Moves</span>
          <ul className={styles.moveList}>
            {
              data?.moves.map((move, i) => (
                <li key={i}>{move.move.name}</li>
              ))
            }
          </ul>
        </div>
      }
    </main>
  )
}
