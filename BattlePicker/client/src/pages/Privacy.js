import React from 'react';
import {Helmet} from 'react-helmet';
import NavBar from '../components/NavBar';

const Privacy = () => {
    return (
        <div>
            <Helmet title="Настройки приватности - BattlePicker" />
            <NavBar />
            <form action="">
                <section className="main">
                    <div className="content">
                        <h1 className="topic">Настройки приватности</h1>
                        <div className="account-info">
                            <div className="block">
                                <div className="title-selection">Кто может приглашать меня в группу:</div>
                                <select className="selectdata">
                                    <option>Все</option>
                                    <option>Только друзья</option>
                                    <option>Никто</option>
                                </select>
                            </div>
                            <div className="block">
                                <div className="title-selection">Кто может просматривать мой профиль:</div>
                                <select className="selectdata">
                                    <option>Все</option>
                                    <option>Только друзья</option>
                                    <option>Только я</option>
                                </select>
                            </div>
                            <div className="block">
                                <div className="title-selection">Кто может видеть мой рейтинг:</div>
                                <select className="selectdata">
                                    <option>Все</option>
                                    <option>Только друзья</option>
                                    <option>Только я</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <section className="line"></section>
        </div>
    );
};

export default Privacy;