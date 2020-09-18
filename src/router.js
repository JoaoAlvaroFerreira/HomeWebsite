import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Pages/home';
import Games from './Pages/games';


export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path="/games" component={Games} />
            </Switch>
        </Router>
    );
}
