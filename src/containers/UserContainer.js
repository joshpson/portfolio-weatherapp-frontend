import React from "react";
import { Route, Switch } from "react-router-dom";

import UserLogin from "../components/UserLogin";
import UserSettings from "../components/UserSettings";

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserSettings />
      </div>
    );
  }
}

export default UserContainer;
