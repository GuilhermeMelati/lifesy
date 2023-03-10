export interface Session {
  session: {
    expires: string
    user: {
      email: string
      image?: string | null
      name?: string | null
      premium: boolean
    }
  }
}
