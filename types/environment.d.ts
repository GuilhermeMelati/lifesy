export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      SECRET: string
      EMAIL_SERVER: string
      EMAIL_FROM: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      GITHUB_ID: string
      GITHUB_SECRET: string
      SENDGRID_API_KEY: string
      UNPLASH_API: string
    }
  }
}
