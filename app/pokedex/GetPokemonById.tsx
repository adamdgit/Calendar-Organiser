import React from 'react'
import Image from 'next/image';
import { PokemonDataProps } from "../../types";
import styles from './styles.module.css'

const fetchPokemonData= async (ID: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
  const data = await res.json()
  const pokemonData: PokemonDataProps = {
    id: data.id,
    name: data.name,
    moves: data.moves,
    sprite: data.sprites.front_default
  }
  return { pokemonData };
}

export default async function GetPokemonById({ id } : { id: number }) {

  const { pokemonData } = await fetchPokemonData(id);

  return (
    <div>
      <h2>{pokemonData?.name.toUpperCase()}</h2>
        {
          pokemonData && 
          <Image 
            key={pokemonData.id}
            src={pokemonData?.sprite} 
            alt={pokemonData?.name + "sprite"} 
            width={96} height={96}
          />
        }
        <ul className={styles.moveList}>
          {
            pokemonData.moves.map((move, i) => (
              <li key={i}>{move.move.name}</li>
            ))
          }
        </ul>
    </div>
  )
}
