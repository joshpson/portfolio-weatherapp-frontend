import React from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import Footer from "../components/Footer";
import FeaturedDetailsPane from "../components/featuredlocation/FeaturedDetailsPane";
import SevenDaysMobile from "../components/featuredlocation/mobile/SevenDaysMobile";
import ChartsWrapperMobile from "../components/featuredlocation/mobile/ChartsWrapperMobile";
import TwentyFourHoursMobile from "../components/featuredlocation/mobile/TwentyFourHoursMobile";
import SevenDaysDesktop from "../components/featuredlocation/desktop/SevenDaysDesktop";
import TwentyFourHoursDesktop from "../components/featuredlocation/desktop/TwentyFourHoursDesktop";
import ChartsView from "../components/featuredlocation/charts/ChartsView";
import LocationHeader from "../components/featuredlocation/LocationHeader";
import { colorClass } from "../actions/colors";
import {
  setFeaturedLocation,
  clearFeaturedLocation
} from "../actions/location";

const desktopViews = {
  seven: <SevenDaysDesktop />,
  "twenty-four": <TwentyFourHoursDesktop />,
  advanced: <ChartsView />
};

class FeaturedLocationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "seven"
    };
  }

  componentDidMount() {
    this.props.setFeaturedLocation(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearFeaturedLocation();
  }

  handlePage = e => {
    this.setState({
      view: e.target.getAttribute("name")
    });
  };

  render() {
    return (
      <div className="container p-0">
        {this.props.weather.currently ? (
          <div>
            <div
              className={
                "card border-0 rounded mt-4 mr-0 ml-0 p-0 pb-md-2 light-shadow " +
                colorClass(this.props.weather.currently.icon)
              }
            >
              <LocationHeader />
              <FeaturedDetailsPane />
            </div>
            <div className="card border-0 main-background">
              {this.props.windowSize > 767 ? (
                <div className="p-0 mr-2 ml-2">
                  <div className="row mt-4 featured-nav">
                    <nav aria-label="breadcrumb bg-none ">
                      <ol className="breadcrumb bg-none p-1">
                        <li
                          className={
                            this.state.view === "seven"
                              ? "breadcrumb-item font-weight-bold"
                              : "breadcrumb-item"
                          }
                          name="seven"
                          onClick={this.handlePage}
                        >
                          Daily
                        </li>
                        <li
                          className={
                            this.state.view === "twenty-four"
                              ? "breadcrumb-item font-weight-bold"
                              : "breadcrumb-item"
                          }
                          name="twenty-four"
                          onClick={this.handlePage}
                        >
                          Hourly
                        </li>
                        <li
                          className={
                            this.state.view === "advanced"
                              ? "breadcrumb-item font-weight-bold"
                              : "breadcrumb-item"
                          }
                          name="advanced"
                          onClick={this.handlePage}
                        >
                          Advanced
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div>{desktopViews[this.state.view]}</div>
                </div>
              ) : (
                <div className="p-2 m-0">
                  <TwentyFourHoursMobile />
                  <SevenDaysMobile />
                  <ChartsWrapperMobile />
                </div>
              )}
            </div>
            <Footer />
          </div>
        ) : (
          <Spinner
            className="loading text-center"
            name="three-bounce"
            color="#bdc3c7"
            fadeIn="none"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather,
    windowSize: state.windowSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFeaturedLocation: id => dispatch(setFeaturedLocation(id)),
    clearFeaturedLocation: () => dispatch(clearFeaturedLocation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedLocationContainer);
