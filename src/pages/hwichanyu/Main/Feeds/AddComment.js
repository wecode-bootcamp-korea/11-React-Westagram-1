import React, { Component } from "react";

class AddComment extends Component {
  render() {
    return (
      <li>
        <div>{this.props.userData.userId}</div>
        <span>{this.props.userData.comment}</span>
      </li>
    );
  }
}

export default AddComment;
