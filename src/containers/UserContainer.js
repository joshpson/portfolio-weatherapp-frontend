import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import UserLogin from "../components/UserLogin";
import UserSettings from "../components/UserSettings";

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.loginError ? (
          <div className="alert alert-primary" role="alert">
            {this.props.loginError}
          </div>
        ) : null}
        {this.props.currentUser ? <UserSettings /> : <UserLogin />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loginError: state.errors.login
  };
};

export default connect(mapStateToProps)(UserContainer);
