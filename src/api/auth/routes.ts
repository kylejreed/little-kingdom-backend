import { generateJWT } from "@utils/jwt"
import { createRouter } from "@utils/routing"
import { login, register } from "./service"

const AuthRouter = createRouter()

AuthRouter.post("/login", async (ctx) => {
  const { email, password } = ctx.request.body
  const user = await login(email, password)
  ctx.body = {
    token: generateJWT({ id: user.id, email: user.email }),
  }
})

AuthRouter.post("/register", async (ctx) => {
  const { email, password } = ctx.request.body
  const user = await register(email, password)
  ctx.body = {
    token: generateJWT({ id: user.id, email: user.email }),
  }
})

export default AuthRouter
