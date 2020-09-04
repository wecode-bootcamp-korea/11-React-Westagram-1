import React from "react";
import { Link } from "react-router-dom";
import "./suggestionListItem.scss";

class SuggestionListItem extends React.Component {
  render() {
    const { id, image, comment } = this.props;
    return (
      <li className="SuggestionListItem">
        <Link className="listPicture" to="/">
          <img alt={`${id}님의 프로필`} className="profileImg" src={image} />
        </Link>
        <div className="listDescription">
          <Link to="/" className="suggestionsId">
            {id}
          </Link>
          <div>
            <span className="comment">{comment}</span>
          </div>
        </div>
        <button>팔로우</button>
      </li>
    );
  }
}

export default SuggestionListItem;
