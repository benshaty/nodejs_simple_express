const express = require('express');
const port = (process.env.PORT) ? process.env.PORT : 3000;
const router = require('./routes/index');
const app = express();

app.set('view engine', 'ejs');
// access the public folder as root
app.use(express.static('public'));

// Use middlewares (app level - not controller level):
// this middleware takes the content of the request`s body, 
//and parses it to json format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});
