import React from 'react';
import './styles.css';

export default function Home() {
        
    return(
        <div className="container">
            <header className="header">
                <ul className="listHeader">
                    <li className="listItem-header">About me</li>
                    <li className="listItem-header">Education</li>
                    <li className="listItem-header">Experience</li>
                    <li className="listItem-header">Skills</li>
                    <li className="listItem-header">Contact me</li>
                </ul>
            </header>  
        </div>         
    );   
}