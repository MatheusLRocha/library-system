import axios from 'axios';

export type User = {
    id: string
    name: string,
    ra: string,
    email: string,
}

export type CreateUserBody = {
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

export async function createUser(data: CreateUserBody): Promise<User> {
    const response = await axios.post<User>('http://localhost:8000/api/users', data);

    return response.data;
}

export async function updateUser(id: string, data: CreateUserBody): Promise<User> {
    const response = await axios.put<User>(`http://localhost:8000/api/users/user/${id}`, data);

    return response.data;
}

export async function deleteUser(id: string) {
    await axios.delete<User>(`http://localhost:8000/api/users/user/${id}`);
}