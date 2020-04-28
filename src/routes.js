import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Contacts from './pages/Contacts';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component ={Home}/>
                <Route path="/curriculum" component ={Curriculum}/>
                <Route path="/contacts" component ={Contacts}/>
            </Switch>
        </BrowserRouter>
    );
}