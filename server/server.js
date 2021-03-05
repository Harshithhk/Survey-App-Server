import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import colors from 'colors'
import bodyParser from 'body-parser'

import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'
import surveyRoutes from './routes/surveyRoutes.js'


dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

connectDB()

app.get("/", (req,res)=>{
    res.send('HELLO FROM API')
})

app.use('/api/users',userRoutes)
app.use('/api/survey',surveyRoutes)

const PORT = process.env.PORT || 5000



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.underline.bold))