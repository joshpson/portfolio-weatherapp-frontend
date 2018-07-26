import React from "react";
import { connect } from "react-redux";
import { editUser } from "../../actions/user";

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      metric: this.props.currentUser.metric
    };
  }

  handleClick = e => {
    e.preventDefault();
    if (this.state.editable) {
      this.props.editUser({
        id: this.props.currentUser.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        metric: this.state.metric
      });
    }
    this.setState({
      editable: !this.state.editable
    });
  };

  handleChange = e => {
    if (e.target.name === "metric") {
      this.setState({
        metric: !this.state.metric
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    return (
      <div className="text-white container">
        {this.props.currentUser ? (
          <form onSubmit={e => e.preventDefault()}>
            <h3>{this.props.currentUser.email}</h3>
            <div className="form-group row">
              <label
                htmlFor="firstName"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                First Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={
                    this.state.editable
                      ? "form-control text-white main-background"
                      : "form-control-plaintext text-white main-background"
                  }
                  onChange={this.handleChange}
                  name="first_name"
                  id="firstName"
                  value={this.state.first_name}
                  readOnly={!this.state.editable}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="lastName"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Last Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={
                    this.state.editable
                      ? "form-control text-white main-background"
                      : "form-control-plaintext text-white main-background"
                  }
                  onChange={this.handleChange}
                  name="last_name"
                  id="lastName"
                  value={this.state.last_name}
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
                    checked={this.state.metric}
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

const mapDispatchToProps = dispatch => {
  return {
    editUser: userData => dispatch(editUser(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);
