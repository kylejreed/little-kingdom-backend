import db from "@/db"
import { compare, hash } from "bcryptjs"

export const login = async (email: string, password: string) => {
  const user = await db.user.findUnique({ where: { email } })
  if (!user) {
    throw new Error("Invalid")
  }

  const isMatch = await comparePasswords(password, user.password)
  if (!isMatch) {
    throw new Error("Bad password")
  }

  return user
}

type AdditionalRegisterInfo = {
  phoneNumber?: string
  name?: string
}
export const register = async (email: string, password: string, extra?: AdditionalRegisterInfo) => {
  const existingUser = await db.user.findUnique({ where: { email } })
  if (!!existingUser) {
    throw new Error("Email already taken")
  }

  const newUser = await db.user.create({ data: { email, password: await hashValue(password), ...extra } })
  return newUser
}

const comparePasswords = async (password: string, compareTo: string) => {
  const hashed = await hashValue(password)
  return await compare(hashed, compareTo)
}

const hashValue = async (password: string) => {
  return hash(password, "ma-salt")
}
