import cors from "cors"
import express from "express"
import { productRoutes } from "./routes/product.routes"
import { statusRoutes } from "./routes/status.routes"

const host = "http://localhost:"
const port = 3333

const server = express()

server.use(express.json())
server.use(cors())

server.use(statusRoutes)
server.use(productRoutes)

server.listen(port, () => console.log(`server is running at ${host + port}`))