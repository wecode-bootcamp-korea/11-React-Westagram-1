import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <nav>
          <div className="navLogo">
            <Link to="/main-yeji">
              <img alt="instagram" src="images/donghokim/logo_text.png" />
            </Link>
          </div>
          <input type="text" placeholder="검색" />
          <ul>
            <li>
              <Link to="/main-yeji">
                <svg
                  aria-label="홈"
                  className="_8-yf5 "
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/main-yeji">
                <svg
                  aria-label="Direct"
                  className="_8-yf5 "
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/main-yeji">
                <img
                  alt="around"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
              </Link>
            </li>
            <li>
              <Link to="/main-yeji">
                <img
                  alt="heart"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
              </Link>
            </li>
            <li>
              <Link to="/main-yeji">
                <img
                  className="profileImg"
                  alt="userProfilePicture"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/116451636_179646123564913_8715759951803035058_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=Dgi1zhx-RZsAX-MY8Qx&amp;oh=a6885f1501f7e079c83180701b1467f1&amp;oe=5F588D18"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
