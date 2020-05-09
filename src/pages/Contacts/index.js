import React from 'react';
import $ from 'jquery';

import './styles.css';
import Header from '../../../src/components/Header.js';
import Footer from '../../../src/components/Footer.js';
import imgphoneGreen from '../../assets/cellphoneVerde.png';
import imgEmailGreen from '../../assets/emailVerde.png';
import imgAddressGreen from '../../assets/addressVerde.png';
import imgLinkedinGreen from '../../assets/linkedInVerde.png';

export default function Contacts(){

    function mudarCor(contactType) {

        if(contactType === "phone"){
            document.getElementById('imgPhoneGreen').style.filter = "brightness(20%)";
            $('#titlePhoneGreen').css('color',' #0D0D0D');
            $('#descriptionPhoneGreen').css('color',' #0D0D0D');
        }
        
        if(contactType === "address"){
            document.getElementById('imgAddressGreen').style.filter = "brightness(20%)";
            $('#titleAddressGreen').css('color',' #0D0D0D');
            $('#descriptionAddressGreen').css('color',' #0D0D0D');
        }
        if(contactType === "email"){
            document.getElementById('imgEmailGreen').style.filter = "brightness(20%)";
            $('#titleEmailGreen').css('color',' #0D0D0D');
            $('#descriptionEmailGreen').css('color',' #0D0D0D'); 
        }
        if(contactType === "linkedin"){
            document.getElementById('imgLinkedinGreen').style.filter = "brightness(20%)";
            $('#titleLinkedinGreen').css('color',' #0D0D0D');
            $('#descriptionLinkedinGreen').css('color',' #0D0D0D');  
        }         
    }

    function mudarCorNormal(contactType) {
        if(contactType === "phone"){
            document.getElementById('imgPhoneGreen').style.filter = "initial";
            $('#titlePhoneGreen').css('color',' #FFF');
            $('#descriptionPhoneGreen').css('color',' #FFF');
        }
        if(contactType === "address"){
            document.getElementById('imgAddressGreen').style.filter = "initial";
            $('#titleAddressGreen').css('color',' #FFF');
            $('#descriptionAddressGreen').css('color',' #FFF');
        }
        if(contactType === "email"){
            document.getElementById('imgEmailGreen').style.filter = "initial";
            $('#titleEmailGreen').css('color',' #FFF');
            $('#descriptionEmailGreen').css('color',' #FFF'); 
        }
        if(contactType === "linkedin"){
            document.getElementById('imgLinkedinGreen').style.filter = "initial"; 
            $('#titleLinkedinGreen').css('color',' #FFF');
            $('#descriptionLinkedinGreen').css('color',' #FFF');
        }      
    }

    return (

        <div className="container">
            <Header />

            <div className="screenPath"><p className="screenPathText">Home / Contacts</p></div>

            <div className="centralizingWrapper">
                <div className="wrapper">
                    <div className="wrapperContact">

                        <div className="boxContact" onMouseEnter={() => mudarCor('phone')} onMouseLeave={() => mudarCorNormal('phone')} >
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
                                    <p id="titleAddressGreen" className="titleContact">Address</p>
                                    <p id="descriptionAddressGreen" className="descriptionContact">São Paulo - SP , Brazil</p>
                                </div>

                            </div>

                        </div>

                    </div>  

                    <div className="wrapperContact">
                        <div className="boxContact" onMouseOver={() => mudarCor('email')} onMouseOut={() => mudarCorNormal('email')}>

                        <div className="iconTel"><img id="imgEmailGreen" src={imgEmailGreen} alt="imgEmailGreen"></img></div>

                            <div className="infoContact">

                                <div className="textContact">
                                    <p id="titleEmailGreen" className="titleContact">E-mail</p>
                                    <p id="descriptionEmailGreen" className="descriptionContact">hencavalcante99@gmail.com</p>
                                </div>

                            </div>

                        </div>

                        <div className="boxContact-lower" onMouseOver={() => mudarCor('linkedin')} onMouseOut={() => mudarCorNormal('linkedin')}>

                            <div className="iconTel"><img id="imgLinkedinGreen" src={imgLinkedinGreen} alt="imgLinkedinGreen"></img></div>

                            <div className="infoContact">

                                <div className="iconEmail"></div>

                                <div className="textContact">
                                    <p id="titleLinkedinGreen" className="titleContact">LinkedIn</p>
                                    <p id="descriptionLinkedinGreen" className="descriptionContact">Henrique Cavalcante Veiga</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>    
            
            <Footer />
        </div>
    );
}