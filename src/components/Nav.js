import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div>
      <nav className="nav nav-pills flex-column flex-sm-row justify-content-between">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Account
          </a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/user">
              Settings
            </Link>
            <Link className="dropdown-item" to="/user">
              Login
            </Link>
          </div>
        </li>
      </nav>
    </div>
  );
};

export default Nav;
