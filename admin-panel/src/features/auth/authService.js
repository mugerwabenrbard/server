import axios from "axios"

const API_URL = 'http://localhost:5000/api/user/'

const register = async (userData) =>{
    const res = await axios.post(API_URL+'register', userData)

    return res.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const login = async (userData) =>{
    const res = await axios.post(API_URL+'login', userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

const authService = {register, login, logout}

export default authService