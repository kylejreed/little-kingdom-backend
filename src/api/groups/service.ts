import db from "@/db"
import { InvitationStatus } from "@prisma/client"

export const inviteUsersToGroup = async (groupId: number, users: number[]) => {}

export const updateInvitationStatus = async (groupId: number, userId: number, status: InvitationStatus) => {
  const invite = await db.smallGroupUser.findUnique({
    where: { smallGroupId_userId: { smallGroupId: +groupId, userId } },
  })

  if (!invite) {
    throw new Error("Not invited")
  }

  if (invite.invitationStatus !== "PENDING") {
    throw new Error("Already responded")
  }

  await db.smallGroupUser.update({
    where: { smallGroupId_userId: { smallGroupId: +groupId, userId } },
    data: {
      invitationStatus: status,
    },
  })
}

export const removeInvitationStatus = async (groupId: number, userId: number) => {
  const invite = await db.smallGroupUser.findUnique({
    where: { smallGroupId_userId: { smallGroupId: +groupId, userId } },
  })

  if (!invite || invite.invitationStatus !== "PENDING") {
    throw new Error("Cannot delete invite")
  }

  await db.smallGroupUser.delete({
    where: { smallGroupId_userId: { smallGroupId: +groupId, userId } },
  })
}
