import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ReactGA from 'react-ga';

const trackingId = "UA-172418049-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

ReactDOM.render(<App />,document.getElementById('root'));

