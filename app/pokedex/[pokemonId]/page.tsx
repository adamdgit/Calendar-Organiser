import React from 'react'
import GetPokemonById from '../GetPokemonById'
import { PokemonDataProps } from "@/types";

const fetchPokemonData = async (ID: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
  const data = await res.json()
  const pokemonData: PokemonDataProps = {
    id: data.id,
    name: data.name,
    moves: data.moves,
    sprite: data.sprites.front_default,
    shiny: data.sprites.front_shiny,
    stats: data.stats
  }
  return { pokemonData };
}

export default async function PokemonInfo({ params: {pokemonId} } : {params: {pokemonId: string}}) {

  const { pokemonData } = await fetchPokemonData(Number(pokemonId));

  return (
    <GetPokemonById data={pokemonData}/>
  )
}
