import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const corOptions = {
    origin: 'http://localhost:3000'
}

app.use(express.json());
app.use(cors(corOptions));

type User = {
    id: string,
    name: string,
    ra: string,
    email: string,
}

let users: User[] = [];

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/user/:id', (req, res) => {
    const [user] = users.filter(user => user.id === req.params.id);

    res.send(user);
});

app.post('/api/users', (req, res) => {
    const newUser: User = {
        id: req.body.id,
        name: req.body.name,
        ra: req.body.ra,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});



app.listen(PORT, () => console.log(`Server connected: http://localhost:${PORT}`));