import React from "react";
import LocationSearch from "../components/LocationSearch";

class NewLocationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <LocationSearch />
      </div>
    );
  }
}

export default NewLocationContainer;
