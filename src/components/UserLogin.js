import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticateUser, postUser } from "../actions/user";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      login: true
    };
  }
  handleFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handlePasswordConfirmation = e => {
    this.setState({
      passwordConfirmation: e.target.value
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
      this.props.postUser({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      });
    }
  };

  // postUser = () => {
  //   fetch(`http://localhost:3000/api/v1/users`, {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({
  //       user: {
  //         first_name: this.state.firstName,
  //         last_name: this.state.lastName,
  //         email: this.state.email,
  //         password: this.state.password,
  //         password_confirmation: this.state.passwordConfirmation
  //       }
  //     })
  //   }).then(res => {
  //     if (res.status === 202) {
  //       this.userLogin();
  //     }
  //   });
  // };

  toggleLogin = e => {
    e.preventDefault();
    this.setState({
      login: !this.state.login
    });
  };

  render() {
    return (
      <div className="card login-form">
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
                      placeholder="First Name"
                      onChange={this.handleFirstName}
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
                      onChange={this.handleLastName}
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
                value={this.state.email}
                onChange={this.handleEmail}
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
                onChange={this.handlePassword}
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
                  onChange={this.handlePasswordConfirmation}
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
              <a className="nav-link" onClick={this.toggleLogin} href="#">
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
    postUser: userData => dispatch(postUser(userData))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UserLogin)
);
