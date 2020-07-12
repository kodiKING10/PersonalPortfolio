import React from 'react';
import './global.css'
import Routes from './routes';
import ReactGA from 'react-ga';

const trackingID = "UA-172418049-1";
ReactGA.initialize(trackingID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    
    <Routes />
  );
}

export default App;
