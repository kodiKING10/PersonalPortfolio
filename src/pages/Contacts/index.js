import React from 'react';

import './styles.css';
import Header from '../../../src/components/Header.js';
import Footer from '../../../src/components/Footer.js';
import imgphoneGreen from '../../assets/cellphoneVerde.png';
import imgEmailGreen from '../../assets/emailVerde.png';
import imgAddressGreen from '../../assets/addressVerde.png';
import imgLinkedinGreen from '../../assets/linkedInVerde.png';

export default function Contacts(){

    function mudarCor(contactType) {

        if(contactType === "phone")
            document.getElementById('imgPhoneGreen').style.filter = "brightness(20%)";
        
        if(contactType === "address")
            document.getElementById('imgAddressGreen').style.filter = "brightness(20%)";
        
        if(contactType === "email")
            document.getElementById('imgEmailGreen').style.filter = "brightness(20%)"; 
        
        if(contactType === "linkedin")
            document.getElementById('imgLinkedinGreen').style.filter = "brightness(20%)";        
    }

    function mudarCorNormal(contactType) {
        if(contactType === "phone")
            document.getElementById('imgPhoneGreen').style.filter = "initial";
        
        if(contactType === "address")
            document.getElementById('imgAddressGreen').style.filter = "initial";
        
        if(contactType === "email")
            document.getElementById('imgEmailGreen').style.filter = "initial"; 
        
        if(contactType === "linkedin")
            document.getElementById('imgLinkedinGreen').style.filter = "initial";   
    }

    return (

        <div className="container">
            <Header />

            <div className="screenPath"><p className="screenPathText">Home / Contacts</p></div>
            <div className="wrapper">
                <div className="wrapperContact">

                    <div className="boxContact" onMouseOver={() => mudarCor('phone')} onMouseOut={() => mudarCorNormal('phone')} >
                        <div className="iconTel"><img id="imgPhoneGreen" src={imgphoneGreen} alt="phoneGreen"></img></div>

                        <div className="infoContact">

                            <div className="textContact">
                                <p id="titlePhoneGreen" className="titleContact">Cell Phone</p>
                                <p id="descriptionPhoneGreen" className="descriptionContact">+55 (11) 98237-1115</p>
                            </div>

                        </div>

                    </div>
                    <div className="boxContact-lower" onMouseOver={() => mudarCor('address')} onMouseOut={() => mudarCorNormal('address')}>

                    <div className="iconTel"><img id="imgAddressGreen" src={imgAddressGreen} alt="imgAddressGreen"></img></div>

                        <div className="infoContact">

                            <div className="textContact">
                                <p className="titleContact">Address</p>
                                <p className="descriptionContact">São Paulo - SP , Brazil</p>
                            </div>

                        </div>

                    </div>

                </div>  

                <div className="wrapperContact">
                    <div className="boxContact" onMouseOver={() => mudarCor('email')} onMouseOut={() => mudarCorNormal('email')}>

                    <div className="iconTel"><img id="imgEmailGreen" src={imgEmailGreen} alt="imgEmailGreen"></img></div>

                        <div className="infoContact">

                            <div className="textContact">
                                <p className="titleContact">E-mail</p>
                                <p className="descriptionContact">hencavalcante99@gmail.com</p>
                            </div>

                        </div>

                    </div>

                    <div className="boxContact-lower" onMouseOver={() => mudarCor('linkedin')} onMouseOut={() => mudarCorNormal('linkedin')}>

                        <div className="iconTel"><img id="imgLinkedinGreen" src={imgLinkedinGreen} alt="imgLinkedinGreen"></img></div>

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