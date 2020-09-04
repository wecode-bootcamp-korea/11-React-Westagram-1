import React from "react";
import { Link } from "react-router-dom";
import Storys from "../Storys/Storys";
import Comment from "../Comment/Comment.js";
import { getData } from "../../../RemoteDataSource";
import "./Feeds.scss";

class Feeds extends React.Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      id: "yejiii_95",
      newText: "",
      isLike: false,
      storyInfo: [],
    };
  }

  componentDidMount = () => {
    getData("MockStorysData.json", (res) => {
      this.setState({
        storyInfo: res.data,
      });
    });
  };

  handleChange = (e) => {
    this.setState({
      newText: e.target.value,
    });
  };

  handleClicked = () => {
    const { commentList, newText } = this.state;

    if (!newText.trim("")) return;
    this.setState({
      commentList: [...commentList, newText],
      newText: "",
    });
  };

  handleEntered = (e) => {
    if (e.keyCode === 13) {
      this.handleClicked();
    }
  };

  handleLikeClick = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };

  render() {
    const { commentList, id, newText, isLike, storyInfo } = this.state;
    const {
      handleClicked,
      handleEntered,
      handleChange,
      handleLikeClick,
    } = this;
    const buttonDisabled = !newText.trim("") ? true : false;

    return (
      <div className="Feeds">
        <section className="feedSection">
          <div className="storyContainer">
            <ul>
              {storyInfo.map((el) => {
                return <Storys key={el.id} id={el.id} image={el.image} />;
              })}
            </ul>
          </div>
          <article className="articleConatiner">
            <div className="articleTop">
              <div className="profilePicture">
                <Link to="/">
                  <img
                    className="profileImg"
                    alt="kim_mi_myo님의 프로필 사진"
                    src="images/yejikang/feedsProfile.jpg"
                  />
                </Link>
              </div>
              <div className="content">
                <Link to="/">kim_mi_myo</Link>
              </div>
              <button className="threeDots"></button>
            </div>
            <div className="articlePictures"></div>
            <div className="articleBottom">
              <div className="articleIconContainer">
                <button
                  className={`articleBtn ${isLike ? "fillheart" : "heart"}`}
                  onClick={handleLikeClick}
                ></button>
                <button className="articleBtn commentImg"></button>
                <button className="articleBtn share">
                  <svg
                    aria-label="게시물 공유"
                    className="_8-yf5 "
                    fill="#262626"
                    height="20"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </button>
                <button className="articleBtn bookmarkImg"></button>
              </div>
              <div className="heartInfoContainer">
                <img
                  className="profileImg"
                  alt="jiyee의 프로필 사진"
                  src="https://instagram.ficn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/51570670_332158407508147_6003142247887384360_n.jpg?_nc_ht=instagram.ficn4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=KPIZ-l-KoVYAX-QMWdX&oh=bf1843f0d18f8e72a5bfc89d7ed4f642&oe=5F62503A"
                />
                <div>
                  <span>jiyee님 </span> 외 <span> 200명</span>이 좋아합니다.
                </div>
              </div>
              <div className="commentContainer">
                <div className="commentItem">
                  <span className="commentId">kim_mi_myo</span>집 가고 싶다.
                </div>
                {commentList.map((comment, index) => (
                  <Comment key={index} id={id} text={comment} />
                ))}
              </div>
            </div>
            <div className="articleTimeInfo">1시간전</div>
            <div className="addCommentContainer">
              <div className="commentForm" onKeyDown={handleEntered}>
                <input
                  className="inputComment"
                  type="text"
                  placeholder="댓글달기..."
                  value={newText}
                  onChange={handleChange}
                />
                <button onClick={handleClicked} disabled={buttonDisabled}>
                  게시
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Feeds;
