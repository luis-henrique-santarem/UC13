// src/app.ts
import express from 'express'
import { config } from 'dotenv'
import routes from '../../25-08/src/routes'

config()
const app = express()
app.use(express.json())
app.use(routes)

export default app