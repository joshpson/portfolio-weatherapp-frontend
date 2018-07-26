import React from "react";
import { connect } from "react-redux";
import { removeLocation } from "../actions/location";
import { Link } from "react-router-dom";

import LocationCard from "../components/LocationCard";

class LocationsContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.userLocations.length > 0 ? (
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
        ) : (
          <div className="row justify-content-center p-5">
            <div className="col-auto text-center">
              <h4>
                You have not saved any locations.<br />
                <Link
                  to="/new-location"
                  style={{ textDecoration: "none", color: "#2980b9" }}
                >
                  Add one here.
                </Link>
              </h4>
            </div>
          </div>
        )}
        <div className="footer text-center">
          <a href="https://darksky.net/poweredby/" target="_blank">
            Powered by Dark Sky
          </a>
        </div>
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
)(LocationsContainer);
