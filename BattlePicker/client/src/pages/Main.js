import React from 'react';
import colorlogo__img from "../images/BattlePicker_colorlogo.png";
import {NavLink} from 'react-router-dom';
import {PLAY_ROUTE, LOGIN_ROUTE} from '../utils/consts';

const Main = () => {
    return (
        <body>
            <div class="wrapper">
                <div class="main maingif">
                    <section>
                        <div class="container" style={{maxWidth: "100%", paddingTop: "25%", paddingBottom: "15%"}}>
                            <p class="fig"><a class="fig"><NavLink to={PLAY_ROUTE}><img class="colorlogo__img" src={colorlogo__img} alt="colorlogo" /></NavLink></a></p>
                            <p class="fig"><a class="fig"><NavLink to={LOGIN_ROUTE}>НАЧАТЬ</NavLink></a></p>
                        </div>
                    </section>
                    <section class="line"></section>
                </div>
            </div>
        </body>
    );
};

export default Main;