// all request from .../api/
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', (req, res) => {
    res.send({
        msg : "this is api root get",
        status : "success"
    })
});

router.post('/', (req, res) => {
    res.send({
        msg : "this is api root post",
        status : "success"
    })
});

router.put('/', (req, res) => {
    res.send({
        msg : "this is api root put",
        status : "success"
    })
});

router.get('/user/:name', (req, res) => {
    if (usersController.checkUser(req.params.name)){
        res.send({
            msg : "this is api user get " + req.params.name,
            status : "success"
        })
    } else {
        res.send({
            msg : "Not Valid user" + req.params.name,
            status : "faild"
        })
    }
    
});


router.get('/user/:name/:age', (req, res) => {
    res.send({
        msg : `this is api user get ${req.params.name} and the age is ${req.params.age}`,
        status : "success"
    })
});

module.exports = router;