import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./actions/user";
import UserLocationsContainer from "./containers/UserLocationsContainer.js";
import SidebarContainer from "./containers/SidebarContainer.js";
import NewLocationContainer from "./containers/NewLocationContainer.js";
import UserContainer from "./containers/UserContainer.js";
import NavContainer from "./containers/NavContainer.js";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.mountUser();
  }

  render() {
    return (
      <div className="container">
        <NavContainer />
        <Switch>
          <Route exact path="/" component={UserLocationsContainer} />
          <Route path="/(user|login)/" component={UserContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mountUser: () => dispatch(loadUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
