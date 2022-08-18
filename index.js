const express = require('express');
const cors= require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomeErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

routerApi(app);
app.use(logErrors);
app.use(boomeErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) =>{
    res.send('hola');
});

app.listen(port, (req, res)=>{
    console.log('hi')
});