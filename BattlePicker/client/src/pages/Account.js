import React from 'react';
import NavBar from '../components/NavBar';
import {Helmet} from 'react-helmet';

const Account = () => {
    return (
        <div>
            <Helmet title="Личный кабинет - BattlePicker" />
            <NavBar />
            <form action="">
                <section class="main">
                    <div class="content">
                        <h1 class="topic">Аккаунт</h1>
                        <div class="account-info">
                            <div class="block">
                                <div class="title-data">Никнейм<br/><p class="data">Nickname</p></div>
                                <div class="edit"><a href="" class="edit-btn">Изменить</a></div>
                            </div>
                            <div class="block">
                                <div class="title-data">Почта<br/><p class="data">unknown@gmail.com</p></div>
                                <div class="edit"><a href="" class="edit-btn">Изменить</a></div>
                            </div>
                            <div class="block">
                                <div class="title-data">Пароль<br/><p class="data">*********</p></div>
                                <div class="edit"><a href="" class="edit-btn">Изменить</a></div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <section class="line"></section>
        </div>
    );
};

export default Account;