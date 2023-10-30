import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Pages/home';


export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Home} />
            </Switch>
        </Router>
    );
}
