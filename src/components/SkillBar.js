import React, { useState, useEffect } from 'react';
import { Line } from 'rc-progress';
import api from '../services/api';

export default function SkillBar(){

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        api.get('/skills').then( response => {
            setSkills(response.data);
        });
    }, []);

    return(
        <div className="boxSkillsCharts">
            {skills.map(skills => (
                <div key={skills.ID} className="boxSkillName">
                    <label className="lblSkillName">{skills.SkillName}</label>
                    <label className="lblPercentage">{skills.Percentage}%</label>
                    <Line className="skillLine" trailColor="#C3C3C3" percent={skills.Percentage} strokeWidth="1" strokeColor="#615CFD" />
                </div>             
            ))}  
        </div>
    )
}