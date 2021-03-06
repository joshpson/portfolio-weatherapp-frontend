import React from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { CSSTransitionGroup } from "react-transition-group";
import FeaturedDetailsPane from "../components/featuredlocation/FeaturedDetailsPane";
import SevenDaysMobile from "../components/featuredlocation/mobile/SevenDaysMobile";
import ChartsWrapperMobile from "../components/featuredlocation/mobile/ChartsWrapperMobile";
import TwentyFourHoursMobile from "../components/featuredlocation/mobile/TwentyFourHoursMobile";
import SevenDaysDesktop from "../components/featuredlocation/desktop/SevenDaysDesktop";
import TwentyFourHoursDesktop from "../components/featuredlocation/desktop/TwentyFourHoursDesktop";
import ChartsView from "../components/featuredlocation/charts/ChartsView";
import LocationHeader from "../components/featuredlocation/LocationHeader";
import { colorHourClass } from "../actions/colors";
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
      <div className="container pb-5">
        {this.props.weather.currently ? (
          <CSSTransitionGroup
            transitionName="featured-head"
            transitionEnter={false}
            transitionLeave={false}
            transitionAppear={true}
            transitionAppearTimeout={400}
          >
            <div key="featured-location-container">
              {this.props.alerts ? (
                <div>
                  {this.props.alerts.map((alert, index) => {
                    return (
                      <div
                        className="alert alert-info"
                        role="alert"
                        key={"alert" + index}
                      >
                        <div data-toggle="collapse" href={"#alert" + index}>
                          <h3>
                            {alert.title} - {alert.severity}
                          </h3>
                        </div>
                        <div className="collapse" id={"alert" + index}>
                          <p>{alert.description}</p>
                          <a href={alert.uri}>More details.</a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              <div
                className={
                  "card border-0 rounded mt-4 mr-0 ml-0 p-0 pb-md-2 light-shadow " +
                  colorHourClass(this.props.weather.currently.icon)
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
                    <CSSTransitionGroup
                      transitionName="carousel"
                      transitionEnterTimeout={1300}
                      transitionLeaveTimeout={300}
                    >
                      <div key={this.state.view}>
                        {desktopViews[this.state.view]}
                      </div>
                    </CSSTransitionGroup>
                  </div>
                ) : (
                  <div className="p-2 m-0">
                    <TwentyFourHoursMobile />
                    <SevenDaysMobile />
                    <ChartsWrapperMobile />
                  </div>
                )}
              </div>
            </div>
          </CSSTransitionGroup>
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
    windowSize: state.windowSize,
    alerts: state.featuredLocation.weather.alerts
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
