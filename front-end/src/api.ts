import axios from 'axios';

type User = {
    id: string,
    name: string,
    ra: string,
    email: string,
}

export async function getPosts(): Promise<User[]> {
    const response = await axios.get<User[]>('http://localhost:8000/api/users');

    return response.data;
}

export async function getPost(id: string): Promise<User> {
    const response = await axios.get<User>(`http://localhost:8000/api/users/user/${id}`);

    return response.data;
}

const response = await axios.get<User[]>('http://localhost:8000/api/users');

const dataApi = response.data;