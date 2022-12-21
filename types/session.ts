export interface Session {
  session: {
    expires: string
    user: {
      email: string
      image: string
      name: string
      premium: boolean
    }
  }
}
