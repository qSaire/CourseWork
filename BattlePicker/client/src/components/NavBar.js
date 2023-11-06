import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE, PROFILE_ROUTE, PLAY_ROUTE, ADMIN_ROUTE, ACCOUNT_ROUTE, PRIVACY_ROUTE} from "../utils/consts";
import colorlogo from '../images/BP_colorlogo.png';
import pic from '../images/csgo-image.jpg';
import burger from '../images/Burger.svg';


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        window.location.href = MAIN_ROUTE;
    }

    return (
        <header class="header">
            <div class="header__inner">
                <div class="container flex">
                    <div class="logobox">
                        <NavLink to={PLAY_ROUTE} title="Главная"><a class="logo">
                            <img class="logo__img" src={colorlogo} alt="logo"/>
                        </a></NavLink>
                    </div>
                    <div class="playmenu">
                        <label class="playmenu-btn">ИГРАТЬ</label>
                        <div class="playmenubox">
                            <div class="playbox">
                                <ul class="flex">
                                    <li class="playmenu-item flex">Ваш рейтинг: <p class="score">3500</p></li>
                                    <li class="playmenu-item flex">Побед за всё время: <p class="score">12</p></li>
                                    <li class="playmenu-item flex">Поражений за всё время: <p class="score">4</p></li>
                                </ul>
                                <div class="play-settings flex">
                                    <li class="playmenu-item flex">ВЫБЕРИТЕ ИГРУ: 
                                        <select class="selectgs">
                                            <option>COUNTER-STRIKE: GLOBAL OFFENSIVE</option>
                                        </select>
                                    </li>
                                    <li class="playmenu-item flex">ВЫБЕРИТЕ РЕЖИМ ИГРЫ: 
                                        <select class="selectgs">
                                            <option>1x1</option>
                                            <option>3x3</option>
                                            <option>5x5</option>
                                        </select>
                                    </li>
                                </div>
                                <div class="startsearch-btn"><button class="start blue-btn">НАЧАТЬ ПОИСК</button></div>
                                <div class="cancelsearch-btn"><button class="cancel red-btn">ОТМЕНИТЬ ПОИСК</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rightbox">
                    <button class="blue-btn flex">
                        <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                        </svg>
                        <p class="btn-text">СОЗДАТЬ ГРУППУ</p>
                    </button>
                    <div class="friendlist">
                        <button class="friendlist-btn">
                            <svg class="friendlist-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                            </svg>
                        </button>
                        <div class="friendlistbox">
                            <ul class="friends">
                                <li class="friend">
                                    <p class="ind">
                                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" viewBox="0 0 16 18">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        </svg>
                                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="green" viewBox="0 0 18 20">
                                            <circle cx="9" cy="9" r="9"/>
                                        </svg>
                                    </p>
                                    <a class="profile-btn flex" href="#">
                                        <p class="avatar"><img class="round" src={pic} alt=""/></p>
                                        <p class="nick">Friend143242342352</p>
                                    </a>
                                    <button class="invite-btn">
                                        <svg class="invite-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                        </svg>
                                    </button>
                                    <button class="deletefriend-btn">
                                        <svg class="deletefriend-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                        </svg>
                                    </button>
                                </li>
                                <li class="friend">
                                    <p class="ind">
                                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" viewBox="0 0 16 18">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        </svg>
                                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="green" viewBox="0 0 18 20">
                                            <circle cx="9" cy="9" r="9"/>
                                        </svg>
                                    </p>
                                    <a class="profile-btn flex" href="#">
                                        <p class="avatar"><img class="round" src={pic} alt=""/></p>
                                        <p class="nick">Friend2</p>
                                    </a>
                                    <button class="invite-btn">
                                        <svg class="invite-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                        </svg>
                                    </button>
                                    <button class="deletefriend-btn">
                                        <svg class="deletefriend-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <NavLink to={PROFILE_ROUTE}><a class="profile-btn onheader flex">
                        <p class="avatar"><img class="round" src={pic} alt=""/></p>
                        <p class="nick">Nickname</p>
                    </a></NavLink>
                </div>
                <div class="burger-menu">
                    <label class="menu-btn">
                        <img class="burger" src={burger} alt=""/>
                    </label>
                    <ul class="menubox">
                        <NavLink to={PROFILE_ROUTE}><a class="profile-btn inmenu flex">
                            <p class="avatar"><img class="round" src={pic} alt=""/></p>
                            <p class="nick">Nickname</p>
                        </a></NavLink>
                        <li><NavLink to={ACCOUNT_ROUTE}><a class="menu-item">Личный кабинет</a></NavLink></li>
                        <li><NavLink to={PRIVACY_ROUTE}><a class="menu-item">Настройки приватности</a></NavLink></li>
                        <section class="line"></section>
                        <li><button style={{minWidth: "187px", textAlign: "left", cursor: "pointer", padding: "0", fontFamily: "Play-Bold", backgroundColor: "#00183D", borderStyle: "none"}} onClick={() => logOut()}><a class="menu-item">Выйти из аккаунта</a></button></li>
                    </ul>
                </div>
            </div>
        </header>
    );
});

export default NavBar;