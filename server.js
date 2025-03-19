const express = require('express')
const app = express()

app.use(express.json())

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
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send("The course with the specified ID was not found")
        return
    }
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const { name } = req.body
    if (!name || name.length < 3) {
        res.status(400).send('Name is required and should be a minimum of 3 characters')
        return;
    }
    const course = {
        id: courses.length + 1,
        name: name
    }

    courses.push(course)
    res.send(courses)
})

app.listen(port, () => {
    console.log("App is running on port: " + port)
})