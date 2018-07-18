import React from "react";
import LocationDetailsContainer from "./LocationDetailsContainer";

class LocationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        LocationContainer<LocationDetailsContainer />
      </div>
    );
  }
}

export default LocationContainer;
