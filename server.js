// DEPENDENCIES
const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()

const notesRouter = require('./controllers/notesRouter')

const { PORT = 3000, MONGODB_URI } = process.env
const app = express()
// MongoDB Configuration
mongoose.connect(MONGODB_URI)
mongoose.connection
	.on('error', () => console.log('MongoDB error has occurred'))
	.on('connected', () => console.log('Listening to MongoDB'))
	.on('disconnected', () => console.log('disconnected from mongodb'))

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/notes', notesRouter)

// PORT listening
app.listen(PORT, () => console.log('Listening on PORT: ' + PORT))
