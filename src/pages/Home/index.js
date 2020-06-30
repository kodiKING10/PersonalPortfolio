import React, { useEffect, useState } from 'react';
import './styles.css';
import imgBooks from '../../assets/booksIcon.png';
import imgController from '../../assets/controllerIcon.png';
import imgComputer from '../../assets/computerIcon.png';
import imgGration from '../../assets/gration.png';
import api from '../../services/api';

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
                        <li className="listItem-header"><a href="#sectionAboutMe">Experience</a></li>
                        <li className="listItem-header"><a href="#sectionAboutMe">My Skills</a></li>
                    </ul>
                </header>

                <div id="boxHome" className="boxHome">
                    <h6>Hello!</h6>
                    <h1>I'm Henrique Cavalcante</h1>
                    <h3>FullStack Web Developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor 
                    sit amet.</p>
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
                        <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit sed do eiusmod tempor.
                        </p>
                    </div>

                    <a href="https://steamcommunity.com/profiles/76561198367866308" target="_blank" rel="noopener noreferrer">
                        <div className="linkHobbiesInterests">
                            <img src={imgController} alt="imgController"></img>
                            <h4>Games</h4>
                            <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit sed do eiusmod tempor.
                            </p>
                        </div>
                    </a>

                    <a href="https://github.com/kodiKING10" target="_blank" rel="noopener noreferrer">
                        <div className="linkHobbiesInterests">
                            <img src={imgComputer} alt="imgComputer"></img>
                            <h4>Code</h4>
                            <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit sed do eiusmod tempor.
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
                        <div className="linkEducation">

                        <div className="educationBoxImage">
                        <img src={imgGration} alt="imgGration"></img>
                        </div>
                        <div className="educationBoxTexts">
                            <p id="titleSchooling"> {certificate.CourseName} </p>
                            <p id="dateSchooling"> {certificate.Date} </p>
                            <p id="descriptionSchooling"> {certificate.Description} </p>
                        </div>

                        </div>
                    ))}
    
                </div>

            </section>           
        </div>         
    );   
}