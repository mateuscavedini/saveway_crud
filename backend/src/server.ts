import express from "express"
import cors from "cors"
import { productRoutes } from "./routes/product.routes"

const host = "http://localhost:"
const port = 3333

const server = express()

server.use(express.json())
server.use(cors())

server.use(productRoutes)

server.listen(port, () => console.log(`server is running at ${host + port}`))