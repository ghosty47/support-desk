const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')


//connect to the database
connectDB()


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.send({msg: 'welcome to our support desk'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))