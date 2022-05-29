import Router from "@koa/router"
import { ApiContext, ApiState } from "@types"
import Application from "koa"

export const handleErrorsMiddleware = async (ctx: Router.RouterContext<ApiState, ApiContext>, next: Application.Next) => {
  try {
    await next()
  } catch (err: any) {
    ctx.status = err.statusCode || err.status || 500
    ctx.body = {
      message: err.message,
    }
  }
}
