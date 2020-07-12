import React from 'react';
import './global.css'
import Routes from './routes';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-172418049-1');
ReactGA.pageview('/');

function App() {
  return (
    
    <Routes />
  );
}

export default App;
