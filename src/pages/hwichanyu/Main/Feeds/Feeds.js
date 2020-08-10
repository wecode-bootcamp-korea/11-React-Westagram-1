import React, { Component } from "react";
import "./Feeds.scss";
import AddComment from "./AddComment";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      list: [],
    };
  }

  getCommVal = (e) => {
    console.log(this.state.value);
    this.setState({
      value: e.target.value,
    });
  };

  addComm = () => {
    const userInfo = {
      userId: "guest_",
      comment: this.state.value,
    };
    this.setState({
      list: [...this.state.list, userInfo],
    });
  };

  render() {
    return (
      <div className="feedsFrame">
        <div className="feedsTop">
          <ul>
            <li>
              <div className="feedsTopImgLine">
                <img
                  alt="userImg"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1QhcpY8coE4AX-e9IVw&oh=ddb67b39eb06795f060abed4bdb5b741&oe=5F4F6570"
                />
                <div className="feedsTopImgName">wecode_b...</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="feed">
          <header className="feedLabel">
            <img
              className="feedWriterIcon"
              alt="userImg"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1QhcpY8coE4AX-e9IVw&oh=ddb67b39eb06795f060abed4bdb5b741&oe=5F4F6570"
            />
            <div className="publish">
              <div>
                <div className="publisherId">wecode_bootcamp</div>
                <div className="publisher">Wecode</div>
              </div>
              <div className="rightDotBtn">
                <img
                  className="dotBtn"
                  alt="iconBtn_dot"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                />
              </div>
            </div>
          </header>
          <div className="feedview">
            <img
              alt="feedContent_photo"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c131.0.1177.1177a/s640x640/115991214_4333071336733032_5865602010383220504_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=oZZ9fUjwxNwAX-u9C4r&oh=f1046b20f04834bb94f0eca9231b602c&oe=5F4EB5DD"
            />
          </div>
          <section className="feedBtns">
            <div className="feedLikeSpace">
              <img
                id="feedheart"
                alt="feedIconBtn_heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                alt="feedIconBtn_chat"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              />
              <img
                alt="feedIconBtn_share"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
              />
            </div>
            <img
              id="feedBookmark"
              alt="feedIconBtn_bookmark"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
            />
          </section>
          <section className="feedLike">
            좋아요 <span>100</span>개
          </section>
          <div className="communication">
            <div className="userStory">
              <a href="#">wecode_bootcamp</a>
              <span>요놈이 귀엽게 쳐다보길래 올려봅니다</span>
              <span>
                ... <span className="seeMore">더 보기</span>
              </span>
            </div>
          </div>
          <ul className="commentList">
            <li>
              <div>Ya_옹</div>
              <span>아주 좋아요!!!!!</span>
            </li>
            <li>
              <div>Hello_world</div>
              <span>어느별에서 왔니??~~</span>
            </li>
            {this.state.list.map((comment) => {
              return <AddComment userData={comment} />;
            })}
          </ul>
          <span className="day">8월 1일</span>
          <section className="addComment">
            <div className="inputComment">
              <input
                type="text"
                placeholder="댓글 달기..."
                onChange={this.getCommVal}
              />
              <button id="submit" onClick={this.addComm}>
                게시
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Feeds;
