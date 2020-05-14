import React from 'react';
import imgGooglePlus from '../../src/assets/google-plus.png';
import imgLinkedin from '../../src/assets/linkedin.png';
import imgWhatsapp from '../../src/assets/whatsapp.png';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer>
            <div className="footerEmailTel">
                    <p className="email">hencavalcante99@gmail.com</p>
                    <p className="telefone">+55 (11) 98237-1115</p>
            </div>

            <div className="footerSocialMedia">

                <div className="footerTextSocialMedia">
                    <p>Social Media<span className="indicator"></span></p>
                </div>    

                <div className="imgSocialMedia">
                    <Link to="/contacts" ><img  src={imgWhatsapp} alt="w"/></Link>
                    <Link to="/contacts" ><img  src={imgLinkedin} alt="L"/></Link>
                    <Link to="/contacts" ><img  src={imgGooglePlus} alt="G"/></Link>
                </div>

            </div>
        </footer>
    );
}

export default Footer;