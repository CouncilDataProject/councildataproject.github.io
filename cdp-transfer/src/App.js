import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import SiteHeader from './Routes/SiteHeader'
export default function App() {
  return (
    <Router>
      <div>
        <SiteHeader/> {
        /*SiteHeader is the nav bar at the top of the site. 
        Add and adjust visual components there, then add their routes to the Router below.*/}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}