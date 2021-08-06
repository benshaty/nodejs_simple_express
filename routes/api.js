// all request from .../api/
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("this is api root get")
});

router.post('/', (req, res) => {
    res.send("this is api root post")
});

router.put('/', (req, res) => {
    res.send("this is api root put")
});

router.get('/user/:name', (req, res) => {
    res.send("this is api user get " + req.params.name)
});


router.get('/user/:name/:age', (req, res) => {
    res.send(`this is api user get ${req.params.name} and the age is ${req.params.age}`)
});

module.exports = router;