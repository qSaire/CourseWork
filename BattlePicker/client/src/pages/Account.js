import React from 'react';
import NavBar from '../components/NavBar';
import {Helmet} from 'react-helmet';

const Account = () => {
    return (
        <div>
            <Helmet title="Личный кабинет - BattlePicker" />
            <NavBar />
            <form action="">
                <section className="main">
                    <div className="content">
                        <h1 className="topic">Аккаунт</h1>
                        <div className="account-info">
                            <div className="block">
                                <div className="title-data">Никнейм<br/><p className="data">Nickname</p></div>
                                <div className="edit"><a href="" className="edit-btn">Изменить</a></div>
                            </div>
                            <div className="block">
                                <div className="title-data">Почта<br/><p className="data">unknown@gmail.com</p></div>
                                <div className="edit"><a href="" className="edit-btn">Изменить</a></div>
                            </div>
                            <div className="block">
                                <div className="title-data">Пароль<br/><p className="data">*********</p></div>
                                <div className="edit"><a href="" className="edit-btn">Изменить</a></div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <section className="line"></section>
        </div>
    );
};

export default Account;