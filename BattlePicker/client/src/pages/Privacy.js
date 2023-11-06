import React from 'react';
import {Helmet} from 'react-helmet';
import NavBar from '../components/NavBar';

const Privacy = () => {
    return (
        <div>
            <Helmet title="Настройки приватности - BattlePicker" />
            <NavBar />
            <form action="">
                <section class="main">
                    <div class="content">
                        <h1 class="topic">Настройки приватности</h1>
                        <div class="account-info">
                            <div class="block">
                                <div class="title-selection">Кто может приглашать меня в группу:</div>
                                <select class="selectdata">
                                    <option>Все</option>
                                    <option>Только друзья</option>
                                    <option>Никто</option>
                                </select>
                            </div>
                            <div class="block">
                                <div class="title-selection">Кто может просматривать мой профиль:</div>
                                <select class="selectdata">
                                    <option>Все</option>
                                    <option>Только друзья</option>
                                    <option>Только я</option>
                                </select>
                            </div>
                            <div class="block">
                                <div class="title-selection">Кто может видеть мой рейтинг:</div>
                                <select class="selectdata">
                                    <option>Все</option>
                                    <option>Только друзья</option>
                                    <option>Только я</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <section class="line"></section>
        </div>
    );
};

export default Privacy;