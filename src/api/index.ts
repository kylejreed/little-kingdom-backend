import GroupsRouter from "./groups/routes"
import UserRouter from "./users/routes"

import { handleErrorsMiddleware } from "./middleware/error-handling"

// Registered in order
export const middlewares = [handleErrorsMiddleware]
export const routes = [UserRouter, GroupsRouter]
