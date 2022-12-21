import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      email: string
      image?: string | null
      name?: string | null
      premium: boolean
    }
  }
}
