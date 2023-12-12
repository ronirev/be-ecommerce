import express, { json }  from "express";
import routes from './routes/index.js';
import displayRoutes from 'express-routemap';

const app = express();
app.use(express.json());

app.use('/api/', routes);
const PORT = 8080

app.listen(PORT, ()=>{
    console.log( `Server On ${PORT}`)
    displayRoutes(app)
})

