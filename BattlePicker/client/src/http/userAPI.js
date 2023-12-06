import {authInstance, guestInstance} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (email, nickname, password) => {
    try {
        const response = await guestInstance.post('/registration', {email, nickname, password, role: 'USER'})
        const token = response.data.token
        const user = jwtDecode(token)
        localStorage.setItem('token', token)
        return user
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
}

export const login = async (email, password) => {
    try {
        const response = await guestInstance.post('/login', {email, password})
        const token = response.data.token
        const user = jwtDecode(token)
        localStorage.setItem('token', token)
        return user
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
}

export const check = async () => {
    let userToken, userData
    try {
        userToken = localStorage.getItem('token')
        if (!userToken) {
            return false
        }
        const response = await authInstance.get('user/check')
        userToken = response.data.token
        userData = jwtDecode(userToken)
        localStorage.setItem('token', userToken)
        return userData
    } catch(e) {
        localStorage.removeItem('token')
        return false
    }
}