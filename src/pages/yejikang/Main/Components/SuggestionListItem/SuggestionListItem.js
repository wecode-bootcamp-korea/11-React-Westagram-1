import React from "react";
import { Link } from "react-router-dom";
import "./suggestionListItem.scss";

class SuggestionListItem extends React.Component {
  render() {
    return (
      <div className="SuggestionListItem">
        <Link className="listPicture" to="/">
          <img
            alt={`${this.props.id}님의 프로필`}
            className="profileImg"
            src={this.props.image}
          />
        </Link>
        <div className="listDescription">
          <Link to="/" className="suggestionsId">
            {this.props.id}
          </Link>
          <div>
            <span className="comment">{this.props.comment}</span>
          </div>
        </div>
        <button>팔로우</button>
      </div>
    );
  }
}

export default SuggestionListItem;
