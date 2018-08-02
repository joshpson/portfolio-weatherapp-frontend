import React from "react";
import { connect } from "react-redux";
import { removeLocation } from "../actions/location";
import { Link } from "react-router-dom";
import Spinner from "react-spinkit";
import { CSSTransitionGroup } from "react-transition-group";
import Footer from "../components/Footer";
import LocationCard from "../components/LocationCard";

class LocationsContainer extends React.Component {
  render() {
    const locationCards = this.props.userLocations.map(location => {
      return (
        <LocationCard
          key={location.location.id}
          location={location.location}
          weather={location.weather}
          remove={this.props.removeLocation}
        />
      );
    });
    return (
      <div>
        {this.props.fetchingLocations ? (
          <Spinner
            className="loading text-center"
            name="three-bounce"
            color="#bdc3c7"
            fadeIn="none"
          />
        ) : (
          <div>
            {this.props.userLocations.length ? (
              <div>
                <div className="p-3 card-columns">
                  <CSSTransitionGroup
                    transitionName="location-cards"
                    transitionAppear={true}
                    transitionAppearTimeout={400}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}
                  >
                    {locationCards}
                  </CSSTransitionGroup>
                </div>

                <Footer />
              </div>
            ) : (
              <div>
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
                <Footer />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLocations: state.userLocations,
    fetchingLocations: state.fetchingLocations
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
