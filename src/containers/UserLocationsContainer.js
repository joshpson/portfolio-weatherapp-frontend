import React from "react";
import { connect } from "react-redux";
import {
  loadLocation,
  setFeaturedLocation,
  removeLocation
} from "../actions/location";
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
              remove={this.props.removeLocation}
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

const mapDispatchToProps = dispatch => {
  return {
    removeLocation: id => dispatch(removeLocation(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLocationsContainer);
