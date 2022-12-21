export interface User {
  user: {
    id: string
    createdAt: Date
    name: string
    email: string
    emailVerified: Date | null
    image: string
    premium: boolean
  }
}
