import express from 'express'
import  Dotenv  from 'dotenv'
import cors from 'cors'
import Approutes from './routes/index.js'
Dotenv.config()
const app=express()
const PORT=process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/',Approutes)

app.listen(PORT,()=>console.log(`APP Listening to${PORT}`))