//  Routes to different components.

import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Main from './Main.js';
import About from './About.js';
import Team from './Team.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
      {/* Header of the Website which acts as Navbar */}
        <header>
          <Navbar />
        </header>
        <Switch>
          <Redirect exact path="/" to="/main" />
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route component={Error} />
        </Switch>
        {/* Footer of the Website which acts as footer form */}
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
