// DEPENDENCIES
const express = require('express')
// const methodOverride = require('method-override')
// const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
// Set template engine to JSX
app.set('view engine', 'jsx')
// Required for express-react-views
app.engine('jsx', require('express-react-views').createEngine())
// Body parser middleware: give us access to req.body
app.use(express.static('public'))


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
