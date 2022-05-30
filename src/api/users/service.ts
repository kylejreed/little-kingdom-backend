import db from "@/db"

export const getUserById = async (id: number) => {
  return db.user.findUnique({ where: { id } })
}

export const getUserByEmail = async (email: string) => {
  return db.user.findUnique({ where: { email } })
}

export const getUserByPhoneNumber = async (phoneNumber: string) => {
  return db.user.findUnique({ where: { phoneNumber } })
}

export const getGroupsForUser = async (id: number) => {
  return db.smallGroup.findMany({
    where: {
      smallGroupUsers: {
        some: {
          userId: id,
          invitationStatus: { in: ["ACCEPTED", "PENDING"] },
        },
      },
    },
  })
}
