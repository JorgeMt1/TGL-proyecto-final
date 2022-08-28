const express = require('express');
const cors= require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/authHandler')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: true }));
require('./utils/auth')

app.get('/', (req, res) =>{
  res.send('Hola Mundo!');
});

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, (req, res)=>{
  console.log(`Mi port ${port}`);
});