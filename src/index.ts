import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import userRouter from './routes/user'
const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// Routes
app.use('/users', userRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
