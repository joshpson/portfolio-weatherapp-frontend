import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticateUser, saveUser } from "../actions/user";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      ...initialFormState
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleLogin = e => {
    e.preventDefault();
    this.setState({
      login: !this.state.login,
      ...initialFormState
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.login) {
      this.props.authenticateUser({
        email: this.state.email,
        password: this.state.password
      });
    } else {
      this.props.saveUser({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      });
    }
  };

  render() {
    return (
      <div className="card login-form bg-info">
        <h5 className="card-header">
          {this.state.login ? "Please sign in" : "Create an account"}
        </h5>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            {this.state.login ? null : (
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      name="firstName"
                      placeholder="First Name"
                      onChange={this.handleChange}
                      value={this.state.firstName}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={this.handleChange}
                      value={this.state.lastName}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              {this.state.login ? null : (
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            {this.state.login ? null : (
              <div className="form-group">
                <label htmlFor="inputPasswordConfirmation">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordConfirmation"
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                  onChange={this.handleChange}
                  value={this.state.passwordConfirmation}
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              {this.state.login ? "Login" : "Join"}
            </button>
          </form>
        </div>
        <div className="card-footer">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" onClick={this.toggleLogin}>
                {this.state.login
                  ? " New user? Sign up here!"
                  : "Existing user? Login here"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: userData => dispatch(authenticateUser(userData)),
    saveUser: userData => dispatch(saveUser(userData))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UserLogin)
);
