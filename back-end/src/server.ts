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

app.post('/api/users', (req, res) => {
    const newUsers: User[] = [
        {
            id: '1',
            name: 'Matheus',
            ra: '111111',
            email: 'emailtest@gmail.com',
        },
        {
            id: '2',
            name: 'Gaby',
            ra: '111112',
            email: 'emailA@gmail.com',
        },
        {
            id: '3',
            name: 'Duck',
            ra: '111113',
            email: 'emailB@gmail.com',
        }
    ];

    newUsers.forEach(user => users.push(user));

    res.send(newUsers);
});

app.get('/api/users/user/:id', (req, res) => {
    const [user] = users.filter(user => user.id === req.params.id);

    res.send(user);
});

app.listen(PORT, () => console.log(`Server connected: http://localhost:${PORT}`));