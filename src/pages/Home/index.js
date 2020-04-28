import React, { useState } from 'react';

import './styles.css';
import imgHome from '../../assets/imgHome.jpg';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { CSSTransitionGroup } from 'react-transition-group';

export default function Home() {

    const [ArrNames, setArrNames] = useState("");
    var counter = 0;
    var limitCounter = 3;
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
            setTimeout(changeSkill, 4500);
        }
        
    return(
        <div onLoad={() => changeSkill()} id="container" className="container">

            <Header />

            <section>
                <div className="corpoHome">
                    <div className="divCentralImg">
                        <img className="imgHome" alt="foto" src={imgHome}/>
                    </div>
                    <div className="divCentralText">
                        <p className="centralText">Hello, I'm <span className="greenCentralText">Henrique Cavalcante</span> a FullStack Developer, Currently Based in São Paulo.</p>
                    </div>
                </div>
            </section> 

            <Footer />

            <div className="caixaSkills">
                 <span id="skills"> {ArrNames} </span>   
            </div>  
        </div>         
    );  
}