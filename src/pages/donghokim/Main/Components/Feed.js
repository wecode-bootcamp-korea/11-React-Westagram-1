import React from "react";
import { Link } from "react-router-dom";
import mockComments from "../../data/mockComments";
import CommentsContainer from "./CommentsContainer";

const USER_NAME = "dongho_223";

class Feed extends React.Component {
  state = {
    comments: [...mockComments],
    postButtonStatus: true,
    commentInput: "",
  };

  onKeyPress = ({ key }) => {
    if (key === "Enter" && this.state.commentInput) {
      this.addComment();
    }
  };

  onClick = () => {
    if (this.state.commentInput) {
      this.addComment();
    }
  };

  changeButtonStatus = () => {
    this.setState({ postButtonStatus: this.state.commentInput ? false : true });
  };

  updateInputs = ({ target: { value } }) => {
    if (value !== "\n") {
      this.setState({ commentInput: value }, this.changeButtonStatus);
    }
  };

  addComment = () => {
    this.setState(
      {
        comments: [
          ...this.state.comments,
          { nickname: USER_NAME, text: this.state.commentInput },
        ],
        commentInput: "",
      },
      this.changeButtonStatus
    );
  };

  render() {
    return (
      <article>
        <header>
          <div className="thumbnail_image_container">
            <img
              alt="user_thumbnail"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/10311323_712444138821261_1788202839_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=zBjZjJAHpKMAX_SN2cG&oh=57e0adda471e7f8f5ec7e9b46b43b552&oe=5F503C98"
              height="32px"
              width="32px"
            />
          </div>
          <div className="user_info_container">
            <div className="author">
              <Link to="#" className="author_link">
                ligonier
              </Link>
            </div>
            <div className="location">Ulsan, South Korea</div>
          </div>
          <div className="option_button">
            <svg fill="#262626" height="16" viewBox="0 0 48 48" width="16">
              <circle
                clipRule="evenodd"
                cx="8"
                cy="24"
                fillRule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clipRule="evenodd"
                cx="24"
                cy="24"
                fillRule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clipRule="evenodd"
                cx="40"
                cy="24"
                fillRule="evenodd"
                r="4.5"
              ></circle>
            </svg>
          </div>
        </header>
        <div className="image_container">
          <div className="image_slider_view">
            <ul className="image_slider_lists">
              <li className="image_content">
                <img
                  alt="image_uploaded"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/116253651_300899534664631_1050555177117324798_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=AcUDeEGiJPMAX-L-gIc&oh=7cc10e05c19a77535e8c8f4a416e1777&oe=5F4FB270"
                />
              </li>
              <li className="image_content">
                <img
                  alt="image_uploaded"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/116253651_300899534664631_1050555177117324798_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=AcUDeEGiJPMAX-L-gIc&oh=7cc10e05c19a77535e8c8f4a416e1777&oe=5F4FB270"
                />
              </li>
            </ul>
            <button className="left_button">
              <div className="button_image"></div>
            </button>
            <button className="right_button">
              <div className="button_image"></div>
            </button>
          </div>
          <div className="slider_dots">
            <div className="active_dot"></div>
            <div className="not_active_dot"></div>
          </div>
        </div>
        <div className="interaction_container">
          <div className="reactions_container">
            <span className="like_button">
              <button>
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              </button>
            </span>
            <span className="comment_button">
              <button>
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  <path
                    clipRule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </span>
            <span className="sharing_button">
              <button>
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
              </button>
            </span>
          </div>
          <span className="store_button">
            <button>
              <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
              </svg>
            </button>
          </span>
        </div>
        <div className="number_of_likes">
          <button>좋아요 2,925개</button>
        </div>
        <div className="text_container">
          <div className="description_container">
            <button className="author">ligonier</button>
            <span className="text">
              Only hours remain in our $5 Friday sale. Save on trustworthy
              discipleship resources when you order before 11:59 p.m. ET. Link
              in bio.
            </span>
          </div>
          <CommentsContainer comments={this.state.comments} />
        </div>
        <div className="time_stamp_container">
          <time dateTime="2020-08-01T00:06:20.000Z" title="2020년 8월 1일">
            8시간 전
          </time>
        </div>
        <div className="comment_input">
          <form>
            <textarea
              name="comment"
              placeholder="댓글 달기..."
              autoComplete="off"
              onKeyPress={this.onKeyPress}
              onChange={this.updateInputs}
              value={this.state.commentInput}
            ></textarea>
            <button
              className="submit"
              disabled={this.state.postButtonStatus}
              onClick={this.onClick}
            >
              게시
            </button>
          </form>
        </div>
      </article>
    );
  }
}

export default Feed;
