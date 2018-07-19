import React from "react";

class LocationCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>{this.props.location.name}</h3>
        {Object.keys(this.props.weather.currently).map(key => {
          return (
            <div>
              {key}: {this.props.weather.currently[key]}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LocationCard;
