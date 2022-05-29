import HelloRouter from "./hello/routes"
import { handleErrorsMiddleware } from "./middleware/error-handling"

// Registered in order
export const middlewares = [handleErrorsMiddleware]
export const routes = [HelloRouter]
