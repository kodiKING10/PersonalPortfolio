import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi'
import me from '../../assets/euCurriculum.jpg';


export default function Curriculum(){

    return (
        <div className="container-curriculum">

            <div className="headerColor">
                <div className="centralizer">   

                    <div className="returnIcon">
                        <Link to="/" className="linkIcon">
                            <FiArrowLeft size = {18} color="#000" className="iconFi"/>
                            Return
                        </Link>
                    </div>               

                    <div className="boxHeader">

                        <div className="boxPic">
                            {/* <img src={me} alt="me" className="mePic"/> */}
                        </div>

                        <div className="boxHeaderInfo">

                            <div className="helloBox">
                                <p>Hello & Welcome</p>    
                            </div>

                            <div className="infoIntroduction">
                                <h2>I'm <span>Henrique Cavalcante Veiga</span></h2>
                                <h3>FullStack Developer</h3>
                            </div>

                            <hr className="headerLineSeparator"></hr>

                            <div className="personalInfo">
                                <h4>Age: 20</h4>
                                <h4>E-mail: hencavalcante99@gmail.com</h4>
                                <h4>Address: São Paulo, SP - Brazil</h4>
                            </div>

                        </div>

                        <div className="footerInHeader">

                        </div>

                    </div>
                </div>
            </div>

            <div className="bodyColor">
                <div className="centralizer">

                    <h1 className="topicTitle">Resume</h1>

                    <div className="boxDownloadCV">
                        <p className="textBoxDownloadCV">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet, est at rutrum consequat, tortor leo posuere mauris, 
                            eget pretium ipsum turpis vitae massa. Etiam elit enim, pharetra ac quam nec, vestibulum malesuada ligula. Aliquam erat volutpat. 
                            Phasellus tempor dignissim imperdiet. Cras ut elit sed arcu tristique maximus. Phasellus et mauris in leo maximus mattis vitae nec metus. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada.
                        </p>

                        <hr className="lineSeparatorBoxDownloadCV"></hr>

                        <div className="boxButtons">
                            <button className="btnDownloadCV">Download CV</button>
                            <Link to="/contacts" className="contactMeLink"> Contact me</Link>
                        </div>

                    </div>

                    <h1 className="topicTitle">Skills</h1>

                </div>
            </div>
            
        </div>
    );
}