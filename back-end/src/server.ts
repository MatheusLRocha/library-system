import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

interface User {
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
    const newUser: User = {
        id: '1',
        name: 'Matheus',
        ra: '111111',
        email: 'emailtest@gmail.com',
    };

    users.push(newUser);

    res.send(newUser);
});

app.listen(PORT, () => console.log(`Server connected: http://localhost:${PORT}`));