import React from "react";
import { connect } from "react-redux";

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      editable: !this.state.editable
    });
  };

  handleClassName = () => {
    return this.state.editable ? "form-control" : "form-control-plaintext";
  };

  render() {
    return (
      <div>
        {this.props.currentUser ? (
          <form>
            <h1>
              {this.props.currentUser.first_name}{" "}
              {this.props.currentUser.last_name}
            </h1>
            <div className="form-group row">
              <label for="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={this.handleClassName()}
                  id="email"
                  value={this.props.currentUser.email}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="metric" className="col-sm-2 col-form-label">
                Unit Preferences:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={this.handleClassName()}
                  id="metric"
                  value={this.props.currentUser.metric ? "Metric" : "Imperial"}
                  placeholder={
                    this.props.currentUser.metric ? "Metric" : "Imperial"
                  }
                />
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
