import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./actions/user";
import UserLocationsContainer from "./containers/UserLocationsContainer.js";
import NewLocationContainer from "./containers/NewLocationContainer.js";
import UserContainer from "./containers/UserContainer.js";
import Nav from "./components/Nav.js";
import FeaturedLocation from "./components/FeaturedLocation";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.mountUser();
  }

  render() {
    return (
      <div className="container app-container bg-dark text-white">
        <Nav />
        <Switch>
          <Route exact path="/" component={UserLocationsContainer} />
          <Route exact path="/locations" component={UserLocationsContainer} />
          <Route path="/locations/:id" component={FeaturedLocation} />
          <Route path="/new-location" component={NewLocationContainer} />
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
