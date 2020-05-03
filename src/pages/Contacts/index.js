import React from 'react';

import './styles.css';
import Header from '../../../src/components/Header.js';
import Footer from '../../../src/components/Footer.js';

export default function Contacts(){
    return (
        <div className="container">
            <Header />

            <div className="screenPath"><p className="screenPathText">Home / Contacts</p></div>
            <div className="wrapper">
                <div className="wrapperContact">

                    <div className="boxContact">

                        <div className="infoContact">

                            <div className="iconTel"></div>

                            <div className="textContact">
                                <p className="titleContact">Cell Phone</p>
                                <p className="descriptionContact">+55 (11) 98237-1115</p>
                            </div>

                        </div>

                    </div>
                    <div className="boxContact-lower">

                        <div className="infoContact">

                            <div className="iconAddress"></div>

                            <div className="textContact">
                                <p className="titleContact">Address</p>
                                <p className="descriptionContact">São Paulo - SP , Brazil</p>
                            </div>

                        </div>

                    </div>

                </div>  

                <div className="wrapperContact">
                    <div className="boxContact">

                        <div className="infoContact">

                            <div className="iconEmail"></div>

                            <div className="textContact">
                                <p className="titleContact">E-mail</p>
                                <p className="descriptionContact">hencavalcante99@gmail.com</p>
                            </div>

                        </div>

                    </div>

                    <div className="boxContact-lower">

                        <div className="infoContact">

                            <div className="iconEmail"></div>

                            <div className="textContact">
                                <p className="titleContact">LinkedIn</p>
                                <p className="descriptionContact">Henrique Cavalcante Veiga</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>    
            
            <Footer />
        </div>
    );
}