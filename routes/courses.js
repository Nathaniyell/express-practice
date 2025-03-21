const express = require('express')
const router = express.Router()
const Joi = require('joi')

let courses = [
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


router.get('/', (req, res) => {
    res.send(courses)
})

router.get('/:id', (req, res) => {
    // const routeParams = req.query
    //const routeParams = req.params
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send("The course with the specified ID was not found")
        return
    }
    res.send(course)
})



router.post('/', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});


router.put('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send("The course with the specified ID was not found");

    }

    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

router.delete('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send("The course with the specified ID was not found");
    }
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

module.exports = router 