/*
add user
delete user
add partners
edit partners
delete partners
*/

// all request from .../api/
const express = require('express');
const router = express.Router();
const db = require('../helpers/db');


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