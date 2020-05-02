import React, { useState } from 'react';

import './styles.css';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { CSSTransitionGroup } from 'react-transition-group';

export default function Home() {

    const [ArrNames, setArrNames] = useState("");
    var counter = 0;
    var limitCounter = 4;
    var names = ['C#', '.NET Core', 'SQL Server', 'Node.js', 'React.js'];

        function changeSkill()
        {
            setArrNames("");
            setArrNames(names[counter]);
            
            if(counter >= limitCounter){
                counter = 0;
            } else { 
                counter++;
            }
            setTimeout(changeSkill, 2500);
        }
        
    return(
        <div onLoad={() => changeSkill()} className="container">

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
                 <span id="skills">{ArrNames}</span>   
            </div>  
        </div>         
    );  
}