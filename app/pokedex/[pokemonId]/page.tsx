import React from 'react'
import GetPokemonById from '../GetPokemonById'

export default function PokemonInfo({ params: {pokemonId} } : {params: {pokemonId: string}}) {

  return (
    <div>
      <GetPokemonById id={pokemonId}/>
    </div>
  )
}
