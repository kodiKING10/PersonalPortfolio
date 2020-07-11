import React, { useEffect, useState } from 'react';
import './styles.css';
import imgBooks from '../../assets/booksIcon.png';
import imgController from '../../assets/controllerIcon.png';
import imgComputer from '../../assets/computerIcon.png';
import imgGration from '../../assets/gration.png';
import api from '../../services/api';
import TypeSkills from '../../components/TypeSkills';
import SkillBar from '../../components/SkillBar';
import iconWhatsapp from '../../assets/whatsapp.png';
import iconLinkedin from '../../assets/linkedin.png';
import iconGPlus from '../../assets/google-plus.png';

export default function Home() {

    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        api.get('/certificate').then( response => {
            setCertificates(response.data);
        });
    }, []);
        
    return(
        <div className="container">

            <section className="sectionHome">        
                <header id="header" className="header">
                    <ul className="listHeader">
                        <li className="listItem-header"><a href="#boxHome">Home</a></li>
                        <li className="listItem-header"><a href="#sectionAboutMe">About me</a></li>
                        <li className="listItem-header"><a href="#sectionEducation">Education</a></li>
                        <li className="listItem-header"><a href="#sectionMyExperience">Experience</a></li>
                        <li className="listItem-header"><a href="#sectionDownloadFooter">Download CV</a></li>
                        <li className="listItem-header"><a href="https://henriquecavalcanteapi.herokuapp.com/api/" target="_blank" rel="noopener noreferrer">API Restful</a></li>
                    </ul>
                </header>

                <div id="boxHome" className="boxHome">
                    <h6>Hello!</h6>
                    <h1>I'm Henrique Cavalcante</h1>
                    <h3>FullStack Web Developer</h3>
                    <p>I am a Web Developer located in São Paulo - SP, Brazil. This is my first personal portfolio, made simply to share a bit of my skills 
                    and passions.
                    </p>

                    <p id="typeSkills"><TypeSkills/></p>
                </div>
            </section>

            <section className="sectionAboutMe">
                <div id="sectionAboutMe" className="verticalCenteredLine"></div>
                <h4>About me</h4>
                <h1>My hobbies and interests</h1>

                <div className="boxHobbiesInterests">
                    <div className="linkHobbiesInterests">
                        <img src={imgBooks} alt="imgBooks"></img>
                        <h4>Books</h4>
                        <p>I've always been interested in fantasy stories, which introduced me to reading.
                        </p>
                    </div>

                    <a href="https://steamcommunity.com/profiles/76561198367866308" target="_blank" rel="noopener noreferrer">
                        <div className="linkHobbiesInterests">
                            <img src={imgController} alt="imgController"></img>
                            <h4>Games</h4>
                            <p>Games have always been an important hobby in my life and will always be :D.
                            </p>
                        </div>
                    </a>

                    <a href="https://github.com/kodiKING10" target="_blank" rel="noopener noreferrer">
                        <div className="linkHobbiesInterests">
                            <img src={imgComputer} alt="imgComputer"></img>
                            <h4>Code</h4>
                            <p>I was introduced to the programming world at 16 yo, and have been trying to improve each day since then.
                            </p>
                        </div>
                    </a>
                </div>
            </section> 

            <section className="sectionEducation">
                <div id="sectionEducation" className="verticalCenteredLine"></div>
                <h4 id="education">Education</h4>
                <h1>My schooling</h1>

                <div className="boxEducation">
                    {certificates.map(certificate => (
                        <a key={certificate.ID} href={certificate.Image} target="_blank" rel="noopener noreferrer" className="overlay">
                            <div className="linkEducation">

                                <div className="educationBoxImage">
                                <img src={imgGration} alt="imgGration"></img>
                                </div>
                                <div className="educationBoxTexts">
                                    <p id="titleSchooling"> {certificate.CourseName} </p>
                                    <p id="institutionSchooling"> {certificate.Institution} </p>
                                    <p id="dateSchooling"> {certificate.Date} </p>
                                    <p id="descriptionSchooling"> {certificate.Description} </p>
                                </div>

                            </div>
                        </a>
                    ))}
                </div>

            </section> 

            <section className="sectionMyExperience">
                <div id="sectionMyExperience" className="verticalCenteredLine"></div>
                <h4 id="experience">My technical experience</h4>

                <div className="boxMyExperience">
                    <div className="boxExperienceResume">
                        <p id="textExperienceTitle">Experience<span>.</span></p>
                        <p id="textExperienceResume">My professional experience started at college with my first job as an intern, 
                        since then i've been trying to reach new heights as a programmer.
                        </p>
                    </div>
                    <div className="boxExperienceDetail">
                        <p className="textWorkTitle">Intern <span>at Kasolution</span></p>
                        <p className="dateExperience">Oct, 2018 - Jun, 2019</p>
                        <p className="descriptionExperience">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                        </p>

                        <hr className="experienceLineSeparator"></hr>

                        <p className="textWorkTitle">Software Developer Jr. <span>at Kasolution</span></p>
                        <p className="dateExperience">Jun, 2019 - Mar, 2020</p>
                        <p className="descriptionExperience">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
                    ut labore et dolore magna aliqua ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
                    ut labore et dolore magna aliqua ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className="boxMySkills">
                    <div className="boxSkillsResume">
                        <p id="textSkillTitle">Skills<span>.</span></p>
                        <p id="textSkillResume">My general skills attained since the start of my journey, without taking to account frameworks and whatnot.
                        </p>
                    </div>
                    
                    <SkillBar></SkillBar>
                    
                </div>
            </section> 

            <section id="sectionDownloadFooter" className="sectionDownloadFooter">

                <div className="boxMidTextDownloadFooter">
                    <h1>Get in touch and let's talk</h1>
                    <p>Just send a message on one of my social media if you wish to know more about me, or check out my CV below. Soon i'll make the code available in GitHub.
                    </p>
                    <div className="boxDownloadCV">
                        <a className="btnDownloadCV" href="https://henriquecavalcanteapi.herokuapp.com/uploads/curriculum2020.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                </div>

                <div className="boxFooter">
                    <ul className="listHeader">
                        <li className="listItem-header"><a href="#boxHome">Home</a></li>
                        <li className="listItem-header"><a href="#sectionAboutMe">About me</a></li>
                        <li className="listItem-header"><a href="https://henriquecavalcanteapi.herokuapp.com/api/" target="_blank" rel="noopener noreferrer">Check the API of my Website</a></li>
                    </ul>

                    <div className="boxSocialMedia">
                        <a href="https://api.whatsapp.com/send?phone=5511982371115" target="_blank" rel="noopener noreferrer"><img className="iconSocialMedia" src={iconWhatsapp} alt ="iconWhatsapp"></img></a>
                        <a href="https://www.linkedin.com/in/henrique-cavalcante-veiga-533324179/" target="_blank" rel="noopener noreferrer"><img className="iconSocialMedia" src={iconLinkedin} alt ="iconLinkedin"></img></a>
                        <a href="mailto:hencavalcante99@gmail.com"><img className="iconSocialMedia" src={iconGPlus} alt ="iconGPlus"></img></a> 
                    </div>    
                </div>

                <div className="boxCopyright">
                    <p>Copyright ©2020 All rights reserved | Personal portfolio of Henrique Cavalcante Veiga</p>
                </div>
                    
            </section>
                    
        </div>         
    );   
}