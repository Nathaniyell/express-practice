const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render("index", { title: "Express Practice App", message: "Hello World" })
})

module.exports = router