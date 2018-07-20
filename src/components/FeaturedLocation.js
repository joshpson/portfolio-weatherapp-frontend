import React from "react";
import { connect } from "react-redux";

import { setFeaturedLocation } from "../actions/location";

class FeaturedLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setFeaturedLocation(this.props.match.params.id);
  }

  render() {
    return <div>{this.props.featuredLocation.location.name}</div>;
  }
}

const mapStateToProps = state => {
  return {
    featuredLocation: state.featuredLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFeaturedLocation: id => dispatch(setFeaturedLocation(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedLocation);
