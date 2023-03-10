const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
app.get('/', (req, res) => {
    res.send('javascript learning site server')
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
    res.send(course);
})
app.get('/course-checkout/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
    res.send(course);
})
app.listen(port, () => {
    console.log('this site running on port', port);
})