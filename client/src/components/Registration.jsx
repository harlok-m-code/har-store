import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRegistration } from '../hook/registration'

function Registration() {

    const { changeEmail, changePassword, changeName, submitForm } = useRegistration()

  return <div className='container'>
            <div className="main">
                    <h1>Регистрация</h1>
                <form>
                    <input name='name' type="text" placeholder='Введите Имя' onChange={changeName}/>
                    <input name='email' type="email" placeholder='Введите email' onChange={changeEmail}/>
                    <input name='password' type="password" placeholder='Введите пароль' onChange={changePassword}/>
                    <button className='btn blue' onClick={submitForm}>Зарегистрироваться</button>
                </form>
                <div >
                    Есть аккаунт? <NavLink to="/login">Войдите!</NavLink>
                </div>
          </div>
        </div>
}

export default Registration;
