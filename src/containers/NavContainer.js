import React from "react";
import Nav from "../components/Nav";

class NavContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default NavContainer;
