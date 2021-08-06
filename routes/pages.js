const express = require('express');
const router = express.Router();


router.get('/', (req , res) => {
    res.send("Home page")
});


router.get('/users', (req , res) => {
    res.send("Users page")
});

module.exports = router;