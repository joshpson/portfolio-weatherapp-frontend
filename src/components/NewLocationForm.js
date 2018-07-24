import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchNewLocation, saveLocation } from "../actions/location";

class NewLocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        if (this.state.query.length > 1) {
          this.props.searchNewLocation(this.state.query);
        }
      }
    );
  };

  handleLocationSelection = prediction => {
    let locationData = {
      name: prediction.structured_formatting.main_text,
      place_id: prediction.place_id
    };
    this.props.saveLocation(locationData);
  };

  render() {
    return (
      <div className="card location-form bg-info">
        <h5 className="card-header">New Location</h5>
        <div className="card-body">
          <form onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="LocationSearch"
                placeholder="Search for a city..."
                name="query"
                onChange={this.handleChange}
                value={this.state.query}
              />
            </div>
          </form>
        </div>
        {this.state.query.length > 2 ? (
          <ul className="list-group list-group-flush bg-info">
            {this.props.predictions.map(prediction => {
              return (
                <li
                  onClick={() => this.handleLocationSelection(prediction)}
                  className="list-group-item bg-info search-result"
                  key={prediction.id}
                >
                  {prediction.description}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchNewLocation: query => dispatch(searchNewLocation(query)),
    saveLocation: locationData => dispatch(saveLocation(locationData))
  };
};

const mapStateToProps = state => {
  return {
    predictions: state.locationSearchResults
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewLocationForm)
);
