export interface ApiState {
  user: { id: number; email: string; admin: boolean }
}

export interface ApiContext {}

export interface JwtUser {
  id: number
  email: string
}
