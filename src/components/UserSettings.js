import React from "react";
import { connect } from "react-redux";

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      email: this.props.currentUser.email,
      metric: this.props.currentUser.metric
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      editable: !this.state.editable
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="text-white">
        {this.props.currentUser ? (
          <form>
            <h1>
              {this.props.currentUser.first_name}{" "}
              {this.props.currentUser.last_name}
            </h1>
            <div className="form-group row">
              <label
                htmlFor="email"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={
                    this.state.editable
                      ? "form-control text-white bg-dark"
                      : "form-control-plaintext text-white bg-dark"
                  }
                  onChange={this.handleChange}
                  name="email"
                  id="email"
                  value={this.state.email}
                  readOnly={!this.state.editable}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="metric"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Units:
              </label>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="metric"
                    onChange={this.handleChange}
                    name="metric"
                    value={this.state.metric}
                    disabled={!this.state.editable}
                  />
                  <label className="form-check-label" htmlFor="metric">
                    Metric Units
                  </label>
                </div>
              </div>
            </div>
            <button
              onClick={this.handleClick}
              type="submit"
              className="btn btn-secondary"
            >
              {this.state.editable ? "Save" : "Edit"}
            </button>
          </form>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(UserSettings);
