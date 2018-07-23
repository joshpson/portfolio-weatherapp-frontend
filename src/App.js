import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./actions/user";
import { updateWindowSize } from "./actions/window";
import LocationsContainer from "./containers/LocationsContainer.js";
import NewLocationForm from "./components/NewLocationForm.js";
import UserLoginForm from "./components/users/UserLoginForm.js";
import UserSettings from "./components/users/UserSettings.js";
import Navbar from "./components/Navbar.js";
import FeaturedLocationContainer from "./containers/FeaturedLocationContainer";

import "./App.css";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    this.props.mountUser();
    this.props.updateWindowSize(window.innerWidth);
    window.addEventListener("resize", () =>
      this.props.updateWindowSize(window.innerWidth)
    );
  }

  render() {
    return (
      <div className="container app-container bg-dark text-white">
        <Navbar />
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={LocationsContainer}
            isAuthenticated={this.props.isAuthenticated}
          />
          <PrivateRoute
            exact
            path="/locations"
            component={LocationsContainer}
            isAuthenticated={this.props.isAuthenticated}
          />

          <PrivateRoute
            path="/locations/:id"
            component={FeaturedLocationContainer}
            isAuthenticated={this.props.isAuthenticated}
          />
          <PrivateRoute
            path="/new-location"
            component={NewLocationForm}
            isAuthenticated={this.props.isAuthenticated}
          />
          <PrivateRoute
            path="/settings"
            component={UserSettings}
            isAuthenticated={this.props.isAuthenticated}
          />
          <Route
            path="/login"
            render={() =>
              this.props.isAuthenticated ? (
                <Redirect to="/locations" />
              ) : (
                <UserLoginForm />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    isAuthenticated: !!state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mountUser: () => dispatch(loadUser()),
    updateWindowSize: size => dispatch(updateWindowSize(size))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
