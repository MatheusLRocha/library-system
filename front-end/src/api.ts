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
    try {
        const response = await axios.get<User[]>('http://localhost:8000/api/users');

        return response.data;
    } catch(error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }

            console.log(error.config);
        }

        throw error;
    }
    
}

export async function getUser(id: string): Promise<User> {

    try {
        const response = await axios.get<User>(`http://localhost:8000/api/users/user/${id}`);

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }

            console.log(error.config);
        }

        throw error;
    }

}

export async function createUser(data: CreateUserBody): Promise<User> {
    try {
        const response = await axios.post<User>('http://localhost:8000/api/users', data);

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }

            console.log(error.config);
        }

        throw error;
    }
}

export async function updateUser(id: string, data: CreateUserBody): Promise<User> {
    try {
        const response = await axios.put<User>(`http://localhost:8000/api/users/user/${id}`, data);

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }

            console.log(error.config);
        }

        throw error;
    }
}

export async function deleteUser(id: string) {
    try {
        await axios.delete<User>(`http://localhost:8000/api/users/user/${id}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }

            console.log(error.config);
        }

        throw error;
    }
}