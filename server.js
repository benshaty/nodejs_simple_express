const express = require('express');
const port = (process.env.PORT) ? process.env.PORT : 3000;
const router = require('./routes/index');
const app = express();

app.use(express.json());

app.use('/', router);

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});


