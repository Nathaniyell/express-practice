const express = require('express')
const app = express()

const port = process.env.PORT || 3434

const courses = [
    {
        id: 1,
        name: "chemistry"
    },
    {
        id: 2,
        name: "physics"
    },
    {
        id: 3,
        name: "mathematics"
    },
]

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
  const singleCourse =  courses.find(c => c.id === parseInt(req.params.id))
   // const routeParams = req.query
    //const routeParams = req.params
    res.send(singleCourse)
})


app.listen(port, () => {
    console.log("App is running on port: " + port)
})