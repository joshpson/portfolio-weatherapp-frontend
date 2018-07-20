import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchNewLocation } from "../actions/location";

class LocationSearch extends React.Component {
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

  handleLocationSelection = placeId => {
    console.log(placeId);
  };

  render() {
    return (
      <div className="card location-form">
        <h5 className="card-header">City Search</h5>
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
          <ul className="list-group list-group-flush">
            {this.props.predictions.map(prediction => {
              let placeId = prediction.place_id;
              return (
                <li
                  onClick={() => this.handleLocationSelection(placeId)}
                  className="list-group-item"
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
    searchNewLocation: query => dispatch(searchNewLocation(query))
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
  )(LocationSearch)
);
