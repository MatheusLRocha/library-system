import axios from 'axios';

type User = {
    id: string,
    name: string,
    ra: string,
    email: string,
}

export async function getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>('http://localhost:8000/api/users');

    return response.data;
}

export async function getUser(id: string): Promise<User> {
    const response = await axios.get<User>(`http://localhost:8000/api/users/user/${id}`);

    return response.data;
}

export async function createUser(data: User): Promise<User> {
    const response = await axios.post<User>('http://localhost:8000/api/users', data);

    return response.data;
}