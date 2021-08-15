const express = require('express');
const router = express.Router();


router.get('/', (req , res) => {
    res.render('../views/pages/index', {
        pageTitle : "home page"
    });
});


router.get('/users', (req , res) => {
    res.render('../views/pages/index', {
        pageTitle : "Users"
    });
});

module.exports = router;