import React from 'react';
import './styles.css';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import TypeSkills from '../../components/TypeSkills.js';

export default function Home() {
        
    return(
        <div className="container">

            <Header />

            <section>
                <div className="corpoHome">
                    <div className="divCentralText">
                        <p className="centralText">Welcome to my portfolio, I'm <span className="greenCentralText">Henrique Cavalcante Veiga</span> a FullStack Developer Currently Based in Brazil, São Paulo.</p>
                    </div>
                </div>
            </section> 

            <Footer />

            <div className="caixaSkills">
                <TypeSkills />
            </div>  
        </div>         
    );   
}