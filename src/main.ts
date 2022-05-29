import "./bootstrap"
import { PORT } from "@utils/constants"
import server from "./server"

server.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}/`)
})
