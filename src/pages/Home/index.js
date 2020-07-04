import React, { useEffect, useState } from 'react';
import './styles.css';
import imgBooks from '../../assets/booksIcon.png';
import imgController from '../../assets/controllerIcon.png';
import imgComputer from '../../assets/computerIcon.png';
import imgGration from '../../assets/gration.png';
import api from '../../services/api';
import TypeSkills from '../../components/TypeSkills';
import SkillBar from '../../components/SkillBar';
import textBack from '../../assets/textBackground.PNG'
import dude from '../../assets/dude.png';

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
                        <li className="listItem-header"><a href="#sectionDownloadCV">Download CV</a></li>
                    </ul>
                </header>

                <div id="boxHome" className="boxHome">
                    <h6>Hello!</h6>
                    <h1>I'm Henrique Cavalcante</h1>
                    <h3>FullStack Web Developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor 
                    sit amet.</p>

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
                        <p id="textExperienceResume">Experience
                            I partner with startups, organizations and Fortune 500 companies to build digital products that help clients overcome challenges and 
                            create lasting connections with millions of people every day.
                        </p>
                    </div>
                    <div className="boxExperienceDetail">
                        <p className="textWorkTitle">Intern <span>at Kasolution</span></p>
                        <p className="dateExperience">Oct, 2018 - Jun, 2019</p>
                        <p className="descriptionExperience">Designed and developed user-friendly website, including optimized check-out page that increased user 
                            clicks, and subsequently customer purchases by 20%.
                        </p>

                        <hr className="experienceLineSeparator"></hr>

                        <p className="textWorkTitle">Software Developer Jr. <span>at Kasolution</span></p>
                        <p className="dateExperience">Jun, 2019 - Mar, 2020</p>
                        <p className="descriptionExperience">Designed and developed user-friendly website, including optimized check-out page that increased user 
                            clicks, and subsequently customer purchases by 20%.
                        </p>
                    </div>
                </div>

                <div className="boxMySkills">
                    <div className="boxSkillsResume">
                        <p id="textSkillTitle">Skills<span>.</span></p>
                        <p id="textSkillResume">I am inspired by creating great work with people who are as passionate as I am about building something awesome.
                        </p>
                    </div>
                    
                    <SkillBar></SkillBar>
                    
                </div>
            </section> 

            <hr className="lineSeparatorDownload"></hr>

            <section id="sectionDownloadCV" className="sectionDownloadCV">
                <div className="boxDownloadCV">
                    <div className="areaDownloadCV">
                        <img className="textBackgroundDownloadCV" src={textBack} alt="textBackgroundDownloadCV"></img>
                        <label>Download CV</label>
                        <p className="textDownloadCV">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.
                        </p>
                        <a className="btnDownloadCV" href="http://localhost:3333/uploads/curriculum2020.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                    <div className="imgDownloadCV">
                        <img className="imgMe" src={dude} alt="dude"></img>
                    </div>
                </div>
            </section>
                    
        </div>         
    );   
}