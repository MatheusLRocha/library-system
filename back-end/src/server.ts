import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/user.js';
import sequelize from './connection.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const corOptions = {
    origin: 'http://localhost:3000'
}

app.use(express.json());
app.use(cors(corOptions));

app.get('/api/users', async (req, res) => {
    const users = await User.findAll();

    await sequelize.authenticate();

    res.json(users);
});

app.get('/api/users/user/:id', (req, res) => {
    
});

app.post('/api/users', (req, res) => {
    const newUser = {
        id: req.body.id,
        name: req.body.name,
        ra: req.body.ra,
        email: req.body.email
    };

    res.status(201).json(newUser);
});



app.listen(PORT, () => console.log(`Server connected: http://localhost:${PORT}`));