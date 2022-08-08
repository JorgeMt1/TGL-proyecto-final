const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.get('/', (req, res) =>{


    res.send('hola');

});

app.listen(port, (req, res)=>{

    console.log('hi')

});