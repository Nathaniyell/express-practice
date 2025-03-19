# MERN Practice
This reppo is for practicing the rudiments of building an express server and api routes

## Key points
- To initialize the express package in your [server.js]("/server.js")
    ```js
    const express = require('express')
    const app = express()
    const PORT = 3000 || //or any port number of your choice
    ```
    + Then at the end of the file, you listeed to the port to start the server
    `app.listen(PORT, console.log("App is running on port: " + PORT))`

- The app has a bunch of usefule methods
    ```
        app.get(), app.post(), app.put(), app.delete()
    ```
    + To run a simple get request, this is the syntax:
    ```js
    app.get('/', (req, res)=>{
    res.send("Hello World")
    })
    ```