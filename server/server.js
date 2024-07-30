import cors from "cors"
import dotenv from "dotenv"
import express from "express"

import dbConnect from "./config/mongoose.config.js"
import coffeeDrinkRouter from "./routes/coffeeDrink.routes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json(), cors())
app.use("/api/coffee", coffeeDrinkRouter)

app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})