import React from "react";
import Comment from "./Comment";

class CommentsContainer extends React.Component {
  render() {
    return (
      <ul className="comments_container">
        {Array.from(this.props.comments).map((comment, index) => (
          <Comment
            key={index}
            nickname={comment.nickname}
            text={comment.text}
          />
        ))}
      </ul>
    );
  }
}

export default CommentsContainer;
