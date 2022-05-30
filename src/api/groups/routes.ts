import { createRouter } from "@utils/routing"
import { inviteUsersToGroup, removeInvitationStatus, updateInvitationStatus } from "./service"

const GroupsRouter = createRouter("/groups")

GroupsRouter.get("/nearby", async (ctx) => {})

GroupsRouter.post("/:id/invite", async (ctx) => {
  const { id } = ctx.params
  const userIdsToInvite = ctx.request.query.userId as string[]
  await inviteUsersToGroup(
    +id,
    userIdsToInvite.map((i) => +i)
  )
})

GroupsRouter.put("/:id/invite", async (ctx) => {
  const { id } = ctx.params
  const userId = ctx.state.user.id
  const { status } = ctx.request.body
  await updateInvitationStatus(+id, userId, status)
})

GroupsRouter.delete("/:id/invite", async (ctx) => {
  const { id } = ctx.params
  const userId = ctx.state.user.id
  await removeInvitationStatus(+id, userId)
})

export default GroupsRouter
