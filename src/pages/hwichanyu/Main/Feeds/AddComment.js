import React, { Component } from "react";

class AddComment extends Component {
  render() {
    return (
      <li>
        <div>hwichan_</div>
        <span>{this.props.comment}</span>
      </li>
    );
  }
}

export default AddComment;
