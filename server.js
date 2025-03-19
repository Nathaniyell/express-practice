const express = require('express')
const app = express()

const PORT = 3434

app.get('/', (req, res)=>{
    res.send("Hello World")
})


app.listen(PORT, ()=>{
    console.log("App is running on port: " + PORT)
})