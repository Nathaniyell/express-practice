const startupDebugger = require('debug')('app:startup')
//const dbDebugger = require('debug')('app:db')
const Joi = require('joi')
const express = require('express')
const logger = require('./middleware/logger')
const helmet = require('helmet')
const morgan = require('morgan')
const courses = require('./routes/courses')
const app = express()

app.set('view engine', 'pug')
app.set('views', './views') //default

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(logger)


//If the current environment is set to development,  then morgan middleware should be active 
if (app.get('env') === "development") {
    app.use(morgan('tiny'))
    startupDebugger("Morgan enabled...")
}
const port = process.env.PORT || 3434
app.get('/', (req, res) => {
    res.render("index", { title: "Express Practice App", message: "Hello World" })
})
app.use('/api/courses', courses)

app.listen(port, () => {
    console.log("App is running on port: " + port)
})