import React from "react";
import "../Comment/comment.scss";

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
    const { isLike } = this.state;
    const { handleClick } = this;
    return (
      <div className="Comment">
        <span className="id">{this.props.id}</span>
        {this.props.text}
        <button
          className={`heartBtn ${isLike ? "fillheart" : "heart"}`}
          onClick={handleClick}
        ></button>
      </div>
    );
  }
}

export default Comment;
