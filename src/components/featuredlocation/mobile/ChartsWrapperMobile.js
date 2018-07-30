import React from "react";
import ChartsView from "../charts/ChartsView";
import Octicon, { ChevronDown, ChevronUp } from "@githubprimer/octicons-react";

class ChartsWrapperMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  handleDropdown = () => {
    this.setState({
      active: !this.state.active
    });
  };
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 p-1">
          <div className="card border-0 main-background">
            <div className="card-body p-0">
              <div
                data-toggle="collapse"
                href="#advancedcharts"
                className="p-3"
                onClick={this.handleDropdown}
              >
                <h5 className="card-title pl-2">Advanced Charts</h5>
                <div className="row justify-content-left pl-2">
                  <div className="col-1 align-self-center pr-0">
                    <Octicon
                      size="small"
                      icon={this.state.active ? ChevronUp : ChevronDown}
                    />
                  </div>
                  <div className="col-11">
                    <div className="card-text">
                      Graphs on weekly temperature, pressure, humidity and wind
                      speed
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 collapse show" id="advancedcharts">
                <ChartsView />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartsWrapperMobile;
