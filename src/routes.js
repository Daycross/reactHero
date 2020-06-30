import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from './pages/Signin/index';
import Register from './pages/Register/index';
import Home from './pages/Home/index';
import NewIncident from './pages/NewIncident/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route path="/register" component={Register} />
                <Route path="/Home" component={Home} />
                <Route path="/NewIncident" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}
