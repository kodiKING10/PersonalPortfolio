import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import me from '../../assets/euCurriculum.jpg';


export default function Curriculum(){

    return (
        <div className="container-curriculum">

            <div className="headerColor">
                <div className="centralizer">
        
                    <Link to="/"><button className="btnReturn">Return</button></Link>  

                    <div className="headerInfo">
                        
                        <img className="picCurriculum" src={me} alt="eu"></img> 

                        <div className="myInfo">
                            <div className="myInfoIntroduction">
                                <h1>Henrique Cavalcante Veiga</h1>
                                <h3>FullStack Developer</h3>
                            </div>

                            <div className="personalInfo">
                                <p>Age:     20</p>
                                <p className="pSeparator">Phone:   +55 (11) 982371115</p>
                                <p className="pSeparator">Adress:  São Paulo - SP, Brazil</p>                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bodyColor">
                <div className="centralizer">

                    <div className="downloadCvInfo">
                        <h1>Hello There_</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet, est at rutrum consequat, tortor leo posuere mauris, 
                            eget pretium ipsum turpis vitae massa. Etiam elit enim, pharetra ac quam nec, vestibulum malesuada ligula. Aliquam erat volutpat. 
                            Phasellus tempor dignissim imperdiet. Cras ut elit sed arcu tristique maximus. Phasellus et mauris in leo maximus mattis vitae nec metus. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada.
                        </p>

                        <button className="btnDownloadCV">Download CV</button>
                    </div>

                </div>

                <hr className="lineSeparator"></hr>

                <div className="centralizer">

                    <div className="resumeInfo">
                        <h1>Resume</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet, est at rutrum consequat, tortor leo posuere mauris, 
                            eget pretium ipsum turpis vitae massa. Etiam elit enim, pharetra ac quam nec, vestibulum malesuada ligula. Aliquam erat volutpat. 
                            Phasellus tempor dignissim imperdiet. Cras ut elit.
                        </p>
                    </div>

                </div>

            </div>
            
        </div>
    );
}