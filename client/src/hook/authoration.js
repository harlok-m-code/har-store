import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './authHook';

export const useRequest = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();


    const { login, ready } = useAuth();

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/user/login", {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => login(response.data.token, response.data.id))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    
    return { submitForm, changeEmail, changePassword }
}