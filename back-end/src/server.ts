import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/users', (req, res) => {
    res.send('Users');
});

app.listen(PORT, () => console.log(`Server connected: http://localhost:${PORT}`));