import express  from "express";
import routes from './routes/index.js';
import displayRoutes from 'express-routemap';

const app = express();

app.use('/', routes);
const PORT = 3000

app.listen(PORT, ()=>{
    console.log( `Server On ${PORT}`)
    displayRoutes(app)
})

