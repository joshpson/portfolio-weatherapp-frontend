import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logoutUser } from "../actions/user";
import { iconNavbarSrc } from "../actions/icons";
import cloudyDark from "../images/animated/cloudy-dark.svg";
import Octicon, { ArrowSmallLeft } from "@githubprimer/octicons-react";

const Navbar = ({ currentUser, featuredLocation, logout, mobile }) => {
  return (
    <div className="pl-3 pr-2 text-light">
      <nav className="nav navbar-expand justify-content-between">
        <Link className="navbar-brand text-light" to="/locations">
          <div className="row justify-content-left">
            {featuredLocation.weather.currently ? (
              <div className="col-1 align-self-center">
                <Octicon size="medium" icon={ArrowSmallLeft} />
              </div>
            ) : null}
            <div className="col-auto align-self-center p-0 m-0">
              <img
                className="navbar-logo"
                src={
                  featuredLocation.weather.currently
                    ? iconNavbarSrc(featuredLocation.weather.currently.icon)
                    : cloudyDark
                }
              />
              <span className="pt-2 pb-0">
                {" "}
                {featuredLocation.location.name
                  ? featuredLocation.location.name
                  : "FreshAir"}
              </span>
            </div>
          </div>
        </Link>
        {!featuredLocation.weather.currently || !mobile ? (
          <div>
            {currentUser ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.first_name}
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link className="dropdown-item" to="/new-location">
                    Add Location
                  </Link>

                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                  <Link className="dropdown-item" to="/about">
                    About
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/login"
                    onClick={e => {
                      e.preventDefault();
                      logout();
                    }}
                  >
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <Link className="nav-item" to="/login">
                Login
              </Link>
            )}
          </div>
        ) : null}
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    featuredLocation: state.featuredLocation,
    mobile: state.windowSize < 767
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
