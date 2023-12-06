import React, {useContext} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, PLAY_ROUTE, ADMIN_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    const click = async (event) => {

        event.preventDefault()
        const email = event.target.email.value.trim()
        const password = event.target.password.value.trim()
        let data
        if (isLogin) {
            data = await login(email, password)
        }
        else {
            const nickname = event.target.nickname.value.trim()
            data = await registration(email, nickname, password)
        }
        if (data) {
            user.login(data)
            if (user.isAdmin) window.location.href = ADMIN_ROUTE;
            if (user.isAuth) window.location.href = PLAY_ROUTE;
        }
    }

    return (
        <container
            className="auth"
            style={{height: window.innerHeight - 220}}
        >
            <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            {isLogin ?
                <form className='auth-form auth-input' onSubmit={click}>
                    <input
                        name="email"
                        className="auth-ctrl"
                        placeholder="Введите email"
                    />
                    <input
                        name="password"
                        className="auth-ctrl"
                        placeholder="Введите пароль"
                        type="password"
                    />
                    <row className="auth-row">
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className ="playmenu-btn">Зарегистрироваться</NavLink>
                        </div>
                        <button 
                            className="auth-btn"
                            type="submit"
                        >
                            Войти
                        </button>
                    </row>
                </form>
                :
                <form className='auth-form auth-input' onSubmit={click}>
                    <input 
                        name="email"
                        className="auth-ctrl"
                        placeholder="Введите email"
                    />
                    <input 
                        name="nickname"
                        className="auth-ctrl"
                        placeholder="Введите никнейм"
                    />
                    <input 
                        name="password"
                        className="auth-ctrl"
                        placeholder="Введите пароль"
                        type="password"
                    />
                    <row className="auth-row">
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE} className ="playmenu-btn">Войти</NavLink>
                        </div>
                        <button 
                            className="auth-btn"
                            type="submit"
                        >
                            Зарегистрироваться
                        </button>
                    </row>
                </form>
            }
        </container>
    );
});

export default Auth;