import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./actions/user";
import LocationsContainer from "./containers/LocationsContainer.js";
import NewLocationForm from "./components/NewLocationForm.js";
import UserLogin from "./components/UserLogin.js";
import UserSettings from "./components/UserSettings.js";
import Nav from "./components/Nav.js";
import FeaturedLocation from "./components/FeaturedLocation";

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
  }

  render() {
    return (
      <div className="container app-container bg-dark text-white">
        <Nav />
        <Switch>
          <Route
            path="/login"
            render={() =>
              this.props.isAuthenticated ? (
                <Redirect to="/settings" />
              ) : (
                <UserLogin />
              )
            }
          />
          <PrivateRoute
            exact
            path="/locations"
            component={LocationsContainer}
            isAuthenticated={this.props.isAuthenticated}
          />
          <PrivateRoute
            exact
            path="/"
            component={LocationsContainer}
            isAuthenticated={this.props.isAuthenticated}
          />

          <PrivateRoute
            path="/locations/:id"
            component={FeaturedLocation}
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
    mountUser: () => dispatch(loadUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
