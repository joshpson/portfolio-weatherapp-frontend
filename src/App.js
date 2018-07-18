import React, { Component } from "react";
import logo from "./logo.svg";
import LocationContainer from "./containers/LocationContainer.js";
import SidebarContainer from "./containers/SidebarContainer.js";
import NewLocationContainer from "./containers/NewLocationContainer.js";
import UserContainer from "./containers/UserContainer.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidebarContainer />
        <LocationContainer />
        <NewLocationContainer />
        <UserContainer />
      </div>
    );
  }
}

export default App;
