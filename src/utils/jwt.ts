import { sign, verify } from "jsonwebtoken"
import { JwtUser } from "@types"
import { APP_JWT_SECRET } from "./constants"

export const generateJWT = (payload: JwtUser) => {
  return sign(payload, APP_JWT_SECRET)
}

export const parseJWT = (token: string) => {
  return verify(token, APP_JWT_SECRET)
}
