const { json } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../helpers/db');


router.get('/', (req , res) => {
    res.render('../views/pages/index', {
        pageTitle : "home page"
    });
});


router.get('/users', (req , res) => {
    let users = db.getUsers();
    res.render('../views/pages/index', {
        pageTitle : "Users",
        users: JSON.stringify(users)
    });
});


module.exports = router;