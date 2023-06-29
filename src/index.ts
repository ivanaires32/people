import express, { Express } from "express"
import "express-async-errors"
import dotenv from "dotenv"
import router from "./Routes/router"
dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))