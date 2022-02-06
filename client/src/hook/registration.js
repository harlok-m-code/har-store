import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useRegistration = () => {

    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeName = (e) => {
        setName(e.target.value)
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
           await axios.post("http://localhost:5000/user/registration",{
               name,
               email,
               password
           }, {
               headers:{
                   "Content-Type": "application/json"
               }
           })
           setName('')
           setPassword('')
           setEmail('')
           navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return { changeName, changePassword, changeEmail, submitForm }
}