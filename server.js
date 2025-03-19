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
    // const routeParams = req.query
     //const routeParams = req.params
  const course =  courses.find(c => c.id === parseInt(req.params.id))
  if(!course){
    res.status(404).send("The course with the specified ID was not found")
    return
  }
    res.send(course)
})


app.listen(port, () => {
    console.log("App is running on port: " + port)
})