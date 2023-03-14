'use client'

import { SessionProvider } from "next-auth/react"

export default function Providers({ children } : { children: React.ReactNode, session: any }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
