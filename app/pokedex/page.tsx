'use client'

import { useRouter } from 'next/navigation'
import React, { useRef, useEffect, useState } from 'react'
import { generationList } from '@/types';
import styles from './styles.module.css'

export default function Pokedex() {

  const [pokemonData, setPokemonData] = useState<generationList>()

  const fetchPokemonData = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/generation/1`)
    const data = await res.json()
    const orginalPokemon: generationList = data.pokemon_species
    // sort by ascending order 1-151
    setPokemonData(orginalPokemon.sort((a,b) => {
        return a.url.slice(a.url.length-4, a.url.length).match(/\d+/g) - b.url.slice(b.url.length-5, b.url.length).match(/\d+/g)
      })
    )
  }

  useEffect(() => {
    fetchPokemonData()
  }, [])
  
  const router = useRouter();
  const searchInput = useRef();

  return (
    <div>
      <h2>Pokedex</h2>
      <input type="text" ref={searchInput} />
      <button type="submit">Search by ID</button>

      <div className={styles.namelist}>
        {
          pokemonData?.map((pokemon, i) => (
            <a key={i} 
              onClick={() => router.push(`/pokedex/${i+1}`)}
              className={styles.name}>
              {i+1}: {pokemon.name}
            </a>
          ))
        }
      </div>
    </div>
  )
}
