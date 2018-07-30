import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { loadUser } from "./actions/user";
import { updateWindowSize } from "./actions/window";
import LocationsContainer from "./containers/LocationsContainer.js";
import NewLocationForm from "./components/NewLocationForm.js";
import UserLoginForm from "./components/users/UserLoginForm.js";
import UserSettings from "./components/users/UserSettings.js";
import Navbar from "./components/Navbar.js";
import FeaturedLocationContainer from "./containers/FeaturedLocationContainer";
import "./style/weather-icons-wind.min.css";
import "./style/weather-icons.min.css";
import "./style/colors.css";
import "./style/App.css";

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
      <div className="container app-container text-white">
        {this.props.fetchingUser ? (
          <Spinner
            className="loading text-center"
            name="three-bounce"
            color="#bdc3c7"
            fadeIn="none"
          />
        ) : (
          <div>
            {this.props.isAuthenticated ? <Navbar /> : null}
            {this.props.errors.login ? (
              <div className="alert alert-primary" role="alert">
                {this.props.errors.login}
              </div>
            ) : null}

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
                render={props => {
                  console.log(props);
                  return this.props.isAuthenticated ? (
                    props.location.state ? (
                      <Redirect to={props.location.state.from.pathname} />
                    ) : (
                      <Redirect to="/locations" />
                    )
                  ) : (
                    <UserLoginForm />
                  );
                }}
              />
              <Route
                render={() => <div> Sorry, this page does not exist. </div>}
              />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    isAuthenticated: !!state.currentUser,
    errors: state.errors,
    fetchingUser: state.fetchingUser
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
