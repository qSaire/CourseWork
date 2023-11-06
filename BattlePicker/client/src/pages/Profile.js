import React from 'react';
import NavBar from '../components/NavBar';
import csgoImage from '../images/csgo-image.jpg';
import {Helmet} from 'react-helmet';
import {observer} from 'mobx-react-lite';

const Profile = () => {
    return (
        <div>
            <Helmet title="Профиль - BattlePicker" />
            <NavBar />
            <div class="back-img"></div>
            <section class="main">
                <div class="container flex">
                    <img class="avatar-block" src={csgoImage} alt=""/>
                    <a class="avatar-change" href="">
                        <svg class="cam-icon" xmlns="http://www.w3.org/2000/svg" width="5px" height="5px" viewBox="-14 -14 45 45">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                    </a>
                    <p class="nick-big">Nickname</p>
                </div>
            </section>
            <section class="line"></section>
        </div>
    );
};

export default Profile;