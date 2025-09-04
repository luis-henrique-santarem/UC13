// src/app.ts
import express from 'express'
import { config } from 'dotenv'
import routes from '../src/routes'
import cors from "cors";

config()
const app = express()
//app.use(cors()) // permite requisições de QUALQUER ORIGEM 
app.use(cors({origin: "http://127.0.0.1:5500"})) // permite requisições de QUALQUER ORIGEM 
app.use(express.json())
app.use(routes)

export default app