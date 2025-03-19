# MERN Practice

This reppo is for practicing the rudiments of building an express server and api routes

## Key points

- To initialize the express package in your [server.js]("/server.js")

    ```js
    const express = require('express')
    const app = express()
    const PORT = process.env.PORT || //or any port number of your choice
    app.use(express.json()) // specify a middleware to parse your json and be able to access it on your api routes
    ```

  - Then at the end of the file, you listeed to the port to start the server
    `app.listen(PORT, console.log("App is running on port: " + PORT))`

- The app has a bunch of usefule methods

    ```
        app.get(), app.post(), app.put(), app.delete()
    ```

  - To run a simple get request, this is the syntax:

    ```js
    app.get('/', (req, res)=>{
    res.send("Hello World")
    })
    ```

  - Your server port should be stored in an env file and loaded using `process.env.PORT`

## Parameters

- To specify route params, we use the `/:(parameter_name)` after the enpoint
  - Route params are used for essential or required values

```js
app.get('/api/courses/:id', (req, res)=>{
     const routeParams = req.params
    res.send(routeParams)     //This returns the route parameter specified in the url to the client
})


```

- Query string parameters are added to the url after a question sign and are usd to provide additional data to the backend service.
  - Query string params are used for optional values

    ```js

    app.get('/api/courses/:id', (req, res)=>{
    const queryParams = req.query
       res.send(queryParams)
    })
        const queryParams = req.query //to access query parameters
    ```
