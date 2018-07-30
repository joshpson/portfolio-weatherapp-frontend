import React from "react";

const DetailsIcon = ({ iconClass, description, information }) => {
  return (
    <div className="col-3 col-md-2 p-2">
      <i className={"wi " + iconClass + " detail-icon"} />
      <br />
      <div className="featured-detail-text pt-1">
        <span className="font-weight-bold">{description}</span>
        <br />
        {information}
      </div>
    </div>
  );
};

export default DetailsIcon;
