const express = require('express')
const app = express()

const port = process.env.PORT || 3434

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3])
})

app.listen(port, ()=>{
    console.log("App is running on port: " + port)
})