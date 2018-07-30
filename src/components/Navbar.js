import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logoutUser } from "../actions/user";
import cloudyDayDark from "../images/animated/cloudy-day-dark.svg";

const Navbar = props => {
  return (
    <div className="p-2 text-light">
      <nav className="nav  navbar-expand justify-content-between">
        <Link className="navbar-brand text-light" to="/locations">
          <img className="navbar-logo" src={cloudyDayDark} /> FreshAir
        </Link>
        {props.currentUser ? (
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.currentUser.first_name}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/new-location">
                Add Location
              </Link>
              <Link className="dropdown-item" to="/settings">
                Settings
              </Link>
              <Link
                className="dropdown-item"
                to="/login"
                onClick={e => {
                  e.preventDefault();
                  props.logout();
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
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
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
