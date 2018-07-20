import React from "react";
import { connect } from "react-redux";
import { loadLocation, setFeaturedLocation } from "../actions/location";
import LocationCard from "../components/LocationCard";
import FeaturedLocation from "../components/FeaturedLocation";

class UserLocationsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-columns">
        {this.props.userLocations.map(location => {
          return (
            <LocationCard
              key={location.location.id}
              location={location.location}
              weather={location.weather}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLocations: state.userLocations
  };
};

export default connect(
  mapStateToProps,
  null
)(UserLocationsContainer);
