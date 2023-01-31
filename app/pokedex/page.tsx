'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { generationList } from '@/types';
import styles from './styles.module.css'

type sortedPokemonProps = [{
  dexNum: number,
  name: string,
  url: string
}]

export default function Pokedex() {

  const [pokemonData, setPokemonData] = useState<sortedPokemonProps | undefined>()
  const [filteredData, setFilteredData] = useState<sortedPokemonProps | undefined>()

  const router = useRouter();

  const fetchPokemonData = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/generation/1`)
    const data = await res.json()
    // sort by ascending order 1-151 as given order from API is incorrect
    // need to slice the last part of the url string and check for digits to get number
    const sortedPokemon: generationList = data.pokemon_species.sort((a,b) => {
      return a.url.slice(a.url.length-4, a.url.length).match(/\d+/g) - b.url.slice(b.url.length-5, b.url.length).match(/\d+/g)
    })
    // adding indexs to use for search function
    const fixedPokemon:sortedPokemonProps = sortedPokemon.map((pokemon, index) => (
      {...pokemon, dexNum: index+1}
    ))
    console.log(fixedPokemon)
    setPokemonData(fixedPokemon)
  }

  const handleSearch = (search:string) => {
    setFilteredData(pokemonData?.filter(a => {
      if (a.name.includes(search)) return a
    }))
  }

  useEffect(() => {
    fetchPokemonData()
  }, [])

  return (
    <div>
      <h2>Pokedex</h2>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />

      <div className={styles.namelist}>
        {
          filteredData ? 
          filteredData?.map((pokemon, i) => (
            <a key={i} 
              onClick={() => router.push(`/pokedex/${pokemon.dexNum}`)}
              className={styles.name}>
              {pokemon.dexNum}: {pokemon.name}
            </a>
          ))
          :
          pokemonData?.map((pokemon, i) => (
            <a key={i} 
              onClick={() => router.push(`/pokedex/${pokemon.dexNum}`)}
              className={styles.name}>
              {pokemon.dexNum}: {pokemon.name}
            </a>
          ))
        }
      </div>
    </div>
  )
}
