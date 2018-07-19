import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../actions/user";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

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

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/user_token`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        auth: { email: this.state.email, password: this.state.password }
      })
    })
      .then(res => res.json())
      .then(token => {
        localStorage.setItem("token", token.jwt);
        this.props.mountUser();
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree to the terms of service that I didn't read!
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
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
  )(UserLogin)
);
