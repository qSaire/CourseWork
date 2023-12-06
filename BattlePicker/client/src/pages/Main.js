import React from 'react';
import colorlogo__img from "../images/BattlePicker_colorlogo.png";
import {NavLink} from 'react-router-dom';
import {PLAY_ROUTE, LOGIN_ROUTE} from '../utils/consts';

const Main = () => {
    return (
        <body>
            <div className="wrapper">
                <div className="main maingif">
                    <section>
                        <div className="container" style={{maxWidth: "100%", paddingTop: "25%", paddingBottom: "15%"}}>
                            <p className="fig"><NavLink to={PLAY_ROUTE} className="fig"><img class="colorlogo__img" src={colorlogo__img} alt="colorlogo" /></NavLink></p>
                            <p className="fig"><NavLink to={LOGIN_ROUTE} className="fig">НАЧАТЬ</NavLink></p>
                        </div>
                    </section>
                    <section className="line"></section>
                </div>
            </div>
        </body>
    );
};

export default Main;