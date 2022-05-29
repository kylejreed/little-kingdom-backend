import type db from "@/db"

interface ApiState {
  user: { id: number; email: string; admin: boolean }
}

interface ApiContext {
  db: typeof db
}

interface JwtUser {
  id: number
  email: string
}
