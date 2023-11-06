import React from 'react';
import NavBar from '../components/NavBar';
import {Helmet} from "react-helmet";

const Play = () => {
    return (
        <div>
            <Helmet title="Главная - BattlePicker" />
            <NavBar />
            <div class="main">
                <div class="parallax"></div>
                <div style={{height: "1000px", boxShadow: "0px -1px 5px 5px rgba(22, 22, 22, 0.55)"}}>
                    <p style={{marginLeft: "72px", marginRight: "72px"}}>
                        
                    </p>

                </div>
                <div class="parallax"></div>
                <section class="line"></section>
            </div>
        </div>
    );
};

export default Play;