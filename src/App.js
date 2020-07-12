import React from 'react';
import './global.css'
import Routes from './routes';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-172418049-1', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});

ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    
    <Routes />
  );
}

export default App;
