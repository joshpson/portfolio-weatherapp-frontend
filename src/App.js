import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LocationContainer from "./containers/LocationContainer.js";
import SidebarContainer from "./containers/SidebarContainer.js";
import NewLocationContainer from "./containers/NewLocationContainer.js";
import UserContainer from "./containers/UserContainer.js";
import NavContainer from "./containers/NavContainer.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavContainer />
        <Switch>
          <Route exact path="/" component={LocationContainer} />
          <Route path="/user" component={UserContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
