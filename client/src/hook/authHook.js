import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { isReadyAction } from '../store/acions/ready'

export const useAuth = () => {
    const [id,setId] = useState('');
    const [token,setToken] = useState('');
    const ready = useSelector(({ready}) => ready.ready);
    const dispath = useDispatch();


    const login = (jwt,userId) => {
        setToken(jwt)
        localStorage.setItem('token', JSON.stringify({
            token: jwt
        }))
        setId(userId)
        localStorage.setItem('id', JSON.stringify({
            id: userId
        }))
        dispath(isReadyAction(true))
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        dispath(isReadyAction(false))
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('id'));
        const token = JSON.parse(localStorage.getItem('token'));
        if(token && token.token && userId && userId.id){
            login(token.token, userId.id)
        }
    },[token])
    return { login, logout, ready }

}