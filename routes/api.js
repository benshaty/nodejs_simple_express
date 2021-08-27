// all request from .../api/
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const db = require('../helpers/db');

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

router.get('/getUsers/', (req, res) => {
    let usersList = db.getUsers();
    res.send(usersList);
});

router.get('/getPartners/', (req, res) => {
    let partnersList = db.getAllPartners();
    res.send(partnersList);
});


router.post('/editUsername/', (req, res) => {   
    if (req.body.last && req.body.newLast && req.body.name && req.body.newName) {
        let resultName = db.editUserName(req.body.name,req.body.newName); 
        let resultLast = db.editUserLast(req.body.last,req.body.newLast);
        if (resultName.flag && resultLast.flag){
            db.updateDb('users');
            res.send({'msg': 'Users DB Updated'});
        }
        else 
            res.send({'msg':resultLast.msg})
    }
    else if (req.body.last && req.body.newLast) {
        let result = db.editUserLast(req.body.last,req.body.newLast)   
        if (result.flag){
            db.updateDb('users');
            res.send({'msg': 'Users DB Updated'});
        }else {res.send({'msg': result.msg})}
    }
    else if (req.body.name && req.body.newName) {
        let result = db.editUserName(req.body.name,req.body.newName)   ;
        console.log(result);
        if (result.flag){
            db.updateDb('users');
            res.send({'msg': 'Users DB Updated'});
        }else {res.send({'msg': result.msg})}

    }
    else {res.send({'msg': 'error'})}
    });




module.exports = router;