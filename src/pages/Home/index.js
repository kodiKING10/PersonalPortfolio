import React from 'react';
import './styles.css';

export default function Home() {
        
    return(
        <div className="container">

            <section className="sectionHome">        
                <header className="header">
                    <ul className="listHeader">
                        <li className="listItem-header"><a href="#sectionAboutMe">About me</a></li>
                        <li className="listItem-header"><a href="#sectionAboutMe">Education</a></li>
                        <li className="listItem-header"><a href="#sectionAboutMe">Experience</a></li>
                        <li className="listItem-header"><a href="#sectionAboutMe">Skills</a></li>
                        <li className="listItem-header"><a href="#sectionAboutMe">Contact me</a></li>
                    </ul>
                </header>

                <div className="boxHome">
                    <h6>Hello!</h6>
                    <h1>I'm Henrique Cavalcante</h1>
                    <h3>FullStack Web Developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor 
                    sit amet.</p>
                </div>
            </section>

            <section className="sectionAboutMe">
                <div width="10px" height="50px" className="verticalCenteredLine"></div>
                <h4 id="sectionAboutMe">About me</h4>
                <h1>My hobbies and interests</h1>
            </section>            
        </div>         
    );   
}