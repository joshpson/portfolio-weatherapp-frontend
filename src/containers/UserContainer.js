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
      <div>{this.props.currentUser ? <UserSettings /> : <UserLogin />}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(UserContainer);
