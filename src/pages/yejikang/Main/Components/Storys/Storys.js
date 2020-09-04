import React from "react";
import { Link } from "react-router-dom";
import "./storys.scss";

class Storys extends React.Component {
  render() {
    return (
      <li className="Storys">
        <Link to="/" className="storyCircle">
          <img
            alt={`${this.props.id}님의 프로필 사진`}
            className="profileImg"
            src={this.props.image}
          />
        </Link>
        <span className="storyId">{this.props.id}</span>
      </li>
    );
  }
}

export default Storys;
