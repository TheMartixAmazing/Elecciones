import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import userRouter from './routes/router.js';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);

db.authenticate()
    .then(() => {
        console.log('Coneccion establecida con la base de datos');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:' + err);
    });

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hola yo');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})