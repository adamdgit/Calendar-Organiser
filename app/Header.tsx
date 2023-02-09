import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

export default function Header() {

  return (
    <header>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/pokedex">Pokedex</Link>
      </nav>
    </header>
  )
}
