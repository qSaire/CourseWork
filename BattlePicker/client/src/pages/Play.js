import React from 'react'
import NavBar from '../components/NavBar'
import {Helmet} from "react-helmet"
import demirage from '../images/demirage.jpg'
import dedust2 from '../images/dedust2.jpg'
import deinferno from '../images/deinferno.jpg'
import denuke from '../images/denuke.jpg'


const Play = () => {
    return (
        <div>
            <Helmet title='Главная - BattlePicker' />
            <NavBar />
            <div className='main'>
                <div className='parallax'></div>
                <section className='results-section'>
                    <h1 style={{marginLeft: "150px"}}>Предыдущие игры</h1>
                    <div>
                        <div className='date'>
                            <p className='date'>
                                05.05.2023
                            </p>
                        </div>
                        <div className='flex game'>
                            <div className='players-block'>
                                <div>
                                    <p className='top-center'>
                                        Игроки:
                                    </p>
                                    <div className='flex'>
                                        <div className='team'>
                                            <p>
                                                Player1
                                            </p>
                                            <p>
                                                Player2
                                            </p>
                                            <p>
                                                Player3
                                            </p>
                                            <p>
                                                Player4
                                            </p>
                                            <p>
                                                Player5
                                            </p>
                                        </div>
                                        <div className='team'>
                                            <p>
                                                Player6
                                            </p>
                                            <p>
                                                Player7
                                            </p>
                                            <p>
                                                Player8
                                            </p>
                                            <p>
                                                Player9
                                            </p>
                                            <p>
                                                Player10
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='score'>
                                <p>
                                    Счёт: 8-16
                                </p>
                            </div>
                            <div className='map'>
                                <p className='top-center'>Карта: de_dust2</p>
                                <img className='map-img' src={dedust2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <section className='line'></section>
                    <div>
                        <div className='date'>
                            <p className='date'>
                                02.03.2023
                            </p>
                        </div>
                        <div className='flex game'>
                            <div className='players-block'>
                                <div>
                                    <p className='top-center'>
                                        Игроки:
                                    </p>
                                    <div className='flex'>
                                        <div className='team'>
                                            <p>
                                                Player1
                                            </p>
                                            <p>
                                                Player2
                                            </p>
                                            <p>
                                                Player3
                                            </p>
                                            <p>
                                                Player4
                                            </p>
                                            <p>
                                                Player5
                                            </p>
                                        </div>
                                        <div className='team'>
                                            <p>
                                                Player6
                                            </p>
                                            <p>
                                                Player7
                                            </p>
                                            <p>
                                                Player8
                                            </p>
                                            <p>
                                                Player9
                                            </p>
                                            <p>
                                                Player10
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='score'>
                                <p>
                                    Счёт: 16-0
                                </p>
                            </div>
                            <div className='map'>
                                <p className='top-center'>Карта: de_mirage</p>
                                <img className='map-img' src={demirage} alt=""/>
                            </div>
                        </div>
                    </div>
                    <section className='line'></section>
                    <div>
                        <div className='date'>
                            <p className='date'>
                                15.02.2023
                            </p>
                        </div>
                        <div className='flex game'>
                            <div className='players-block'>
                                <div>
                                    <p className='top-center'>
                                        Игроки:
                                    </p>
                                    <div className='flex'>
                                        <div className='team'>
                                            <p>
                                                Player1
                                            </p>
                                            <p>
                                                Player2
                                            </p>
                                            <p>
                                                Player3
                                            </p>
                                            <p>
                                                Player4
                                            </p>
                                            <p>
                                                Player5
                                            </p>
                                        </div>
                                        <div className='team'>
                                            <p>
                                                Player6
                                            </p>
                                            <p>
                                                Player7
                                            </p>
                                            <p>
                                                Player8
                                            </p>
                                            <p>
                                                Player9
                                            </p>
                                            <p>
                                                Player10
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='score'>
                                <p>
                                    Счёт: 16-14
                                </p>
                            </div>
                            <div className='map'>
                                <p className='top-center'>Карта: de_inferno</p>
                                <img className='map-img' src={deinferno} alt=""/>
                            </div>
                        </div>
                    </div>
                    <section className='line'></section>
                    <div>
                        <div className='date'>
                            <p className='date'>
                                01.01.2023
                            </p>
                        </div>
                        <div className='flex game'>
                            <div className='players-block'>
                                <div>
                                    <p className='top-center'>
                                        Игроки:
                                    </p>
                                    <div className='flex'>
                                        <div className='team'>
                                            <p>
                                                Player1
                                            </p>
                                            <p>
                                                Player2
                                            </p>
                                            <p>
                                                Player3
                                            </p>
                                            <p>
                                                Player4
                                            </p>
                                            <p>
                                                Player5
                                            </p>
                                        </div>
                                        <div className='team'>
                                            <p>
                                                Player6
                                            </p>
                                            <p>
                                                Player7
                                            </p>
                                            <p>
                                                Player8
                                            </p>
                                            <p>
                                                Player9
                                            </p>
                                            <p>
                                                Player10
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='score'>
                                <p>
                                    Счёт: 12-16
                                </p>
                            </div>
                            <div className='map'>
                                <p className='top-center'>Карта: de_nuke</p>
                                <img className='map-img' src={denuke} alt=""/>
                            </div>
                        </div>
                    </div>
                    <section className='line'></section>
                </section>
                <div className='parallax'></div>
                <section className='line'></section>
            </div>
        </div>
    );
};

export default Play;