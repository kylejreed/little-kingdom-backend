import { createRouter } from "@utils/routing"
import { getGroupsForUser, getUserById } from "./service"

const UserRouter = createRouter("/users")

UserRouter.get("/me", async (ctx) => {
  const userId = ctx.state.user.id
  const user = await getUserById(userId)
  ctx.body = user
})

UserRouter.get("/groups", async (ctx) => {
  const userId = ctx.state.user.id
  const groups = await getGroupsForUser(userId)
  ctx.body = groups
})

export default UserRouter
