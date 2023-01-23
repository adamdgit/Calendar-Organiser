
import React from 'react'
import GetPokemonById from "../pokedex/GetPokemonById"

export default function Pokedex() {


  return (
    <div>
      <h2>Pokedex</h2>
      <GetPokemonById />
      <input type="text" />
      <button>Search by ID</button>
    </div>
  )
}
