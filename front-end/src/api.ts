import axios from 'axios';

type User = {
    id: string,
    name: string,
    ra: string,
    email: string,
}

const response = await axios.get<User[]>('http://localhost:8000/api/users');

const data = response.data;

export default data;