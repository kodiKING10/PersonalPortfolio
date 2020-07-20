import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function TypeSkills(){
    return(
        <ReactTypingEffect
            text={['HTML5','CSS3', 'C#', 'Javascript', 'Node.js', 'React.js','SQL Server']}
            loop={true}
            speed="150"
            eraseDelay="1000"
            typingDelay="800"
        />
    );
}