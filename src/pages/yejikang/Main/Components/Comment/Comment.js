import React from "react";

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      isLike: false,
    };
  }

  handleClick = () => {
    this.setState({ isLike: !this.state.isLike });
  };
  render() {
    return (
      <div className="commentItem">
        <span className="commentId">{this.props.id}</span>
        {this.props.text}
        <button
          className={`commentHeartBtn ${
            this.state.isLike ? "fillheart" : "heart"
          }`}
          onClick={this.handleClick}
        ></button>
      </div>
    );
  }
}

export default Comment;
