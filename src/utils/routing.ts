import Router from "@koa/router"
import { ApiContext, ApiState } from "@types"

export const createRouter = (prefix?: string) => {
  return new Router<ApiState, ApiContext>({ prefix })
}
