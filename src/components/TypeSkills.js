import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function TypeSkills(){
    return(
        <ReactTypingEffect
            text={['C#', '.NET Core', 'SQL Server', 'Javascript', 'Node.js', 'React.js']}
            loop={true}
            speed="180"
            eraseDelay="2500"
            typingDelay="2000"
        />
    );
}