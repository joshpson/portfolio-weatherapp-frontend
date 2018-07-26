import React from "react";
import ChartsView from "../charts/ChartsView";

const ChartsWrapperMobile = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 p-1">
        <div className="card border-0 main-background">
          <div className="card-body p-0">
            <div data-toggle="collapse" href="#advancedcharts" className="p-3">
              <h5 className="card-title pl-4">Advanced Charts</h5>
              <div className="card-text pl-4">
                Graphs on weekly temperature, pressure, humidity and wind speed
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
};

export default ChartsWrapperMobile;
