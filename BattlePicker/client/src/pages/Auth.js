import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, PLAY_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [nickname, setNick] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data =  registration(email, nickname, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            //window.location.href = PLAY_ROUTE;
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="auth"
            style={{height: window.innerHeight - 220}}
        >
            <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            {isLogin ?
                <Form className='auth-form'>
                    <div className="auth-input">
                        <input className="auth-ctrl"
                            name="email"
                            type="text"
                            placeholder="Введите email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input className="auth-ctrl"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </div>
                    <Row className="auth-row">
                        <div>
                            Нет аккаунта? <a class ="playmenu-btn"><NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться.</NavLink></a>
                        </div>
                        <Button className="auth-btn"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Войти
                        </Button>
                    </Row>
                </Form>
                :
                <Form className='auth-form'>
                    <div className="auth-input">
                        <Form.Control className="auth-ctrl"
                            placeholder="Введите email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control className="auth-ctrl"
                            placeholder="Введите никнейм"
                            value={nickname}
                            onChange={e => setNick(e.target.value)}
                        />
                        <Form.Control className="auth-ctrl"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </div>
                    <Row className="auth-row">
                        <div>
                            Есть аккаунт? <a class ="playmenu-btn"><NavLink to={LOGIN_ROUTE}>Войти.</NavLink></a>
                        </div>
                        <Button className="auth-btn"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Зарегистрироваться
                        </Button>
                    </Row>
                </Form>
            }
        </Container>
    );
});

export default Auth;