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

app.get('/api/users/user/:id', async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    res.json(user);
});

app.post('/api/users', async (req, res) => {
    const newUser = await User.create({
        name: req.body.name, 
        ra: req.body.ra,
        email: req.body.email
    });

    res.status(201).json(newUser);
});

app.delete('/api/users/user/:id', async (req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
});



app.listen(PORT, () => console.log(`Server connected: http://localhost:${PORT}`));