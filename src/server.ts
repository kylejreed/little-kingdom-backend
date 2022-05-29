import Koa from "koa"
import koaBody from "koa-body"
import jwt from "koa-jwt"
import serve from "koa-static"

import db from "./db"
import { routes, middlewares } from "./api"
import { APP_JWT_SECRET } from "./utils/constants"
import { ApiContext, ApiState } from "@types"

const app = new Koa<ApiState, ApiContext>()
app.context.db = db

app.use(serve("./public"))
app.use(koaBody({ json: true }))
app.use(jwt({ secret: APP_JWT_SECRET }).unless({ path: [/^\/public/, /^\/login/, /^\/register/] }))

for (const middleware of middlewares) {
  app.use(middleware)
}

for (const router of Object.values(routes)) {
  app.use(router.routes())
}

export default app
