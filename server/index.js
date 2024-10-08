import express from 'express'
import cors from 'cors'
import http from 'http'
import mongoose from 'mongoose'
import 'dotenv/config'
import routes from './src/routes/main.router.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", routes)

const port = process.env.PORT || 5022

const server = http.createServer(app)
console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        server.listen(port, () => {
            
            console.log(`Server is listening on port: ${port}`)
        })
    })
    .catch((error) => {
        console.log({error})
        process.exit(1)
    })