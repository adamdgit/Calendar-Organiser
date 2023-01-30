import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import { PokemonDataProps } from '@/types';

export default function GetPokemonById({ data } : { data: PokemonDataProps }) {

  return (
    <div>
      <h2>{data?.name.toUpperCase()}</h2>
        {
          data && 
          <Image 
            key={data.id}
            src={data?.sprite} 
            alt={data?.name + "sprite"} 
            width={96} height={96}
          />
        }
        <ul className={styles.moveList}>
          {
            data?.moves.map((move, i) => (
              <li key={i}>{move.move.name}</li>
            ))
          }
        </ul>
    </div>
  )
}
