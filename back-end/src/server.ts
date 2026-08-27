import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/user.js';
import sequelize from './connection.js';
import router from './routes/routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const corOptions = {
    origin: 'http://localhost:3000'
}

app.use(express.json());
app.use(cors(corOptions));
app.use('/', router);

app.listen(PORT, () => console.log(`Server connected: http://localhost:${PORT}`));