import React from 'react';
import './css/login.css'
import { NavLink } from 'react-router-dom'
import { useRequest } from '../hook/authoration';

function Authorization() {

    const { submitForm, changeEmail, changePassword } = useRequest();

  return <div className='container'>
            <div className="main">
                    <h1>Авторизация</h1>
                <form>
                    <input name='email' type="email" placeholder='Введите email' onChange={changeEmail}/>
                    <input name='password' type="password" placeholder='Введите пароль' onChange={changePassword}/>
                    <button className='btn blue' onClick={submitForm}>Войти</button>
                </form>
                <div >
                    Нет аккаунта? <NavLink to="/registration">Зарегистрируйся!</NavLink>
                </div>
        </div>
        </div>
}

export default Authorization;
