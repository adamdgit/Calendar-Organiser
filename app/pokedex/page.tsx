'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useRef } from 'react'
import PokemonList from "./PokemonList"

export default function Pokedex() {

  const router = useRouter();
  const searchInput = useRef();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/pokedex/${searchInput.current.value}`)
  }

  return (
    <div>
      <h2>Pokedex</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={searchInput} />
        <button type="submit">Search by ID</button>
      </form>

      <PokemonList />
    </div>
  )
}
