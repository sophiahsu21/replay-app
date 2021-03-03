import axios from 'axios';

export async function login({email, password}) {
    const result = await axios.post('/api/users/login', {email, password})
    return result.data
}

export async function signup({name, email, password}) {
    const result = await axios.post('/api/users', {name, email, password})
    return result.data
}