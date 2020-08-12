import React from "react";
import "./Aside.scss";
import { Link } from "react-router-dom";

class Aside extends React.Component {
  render() {
    return (
      <div className="Aside">
        <aside className="mainAside">
          <div className="profileContainer">
            <Link to="/http://" className="userImg picture__link/">
              <img
                className="profileImg"
                alt="yejiiii_95의프로필사진"
                src="images/yejikang/me.jpg"
              />
            </Link>
            <div className="profileComment">
              <Link to="/" className="userId">
                yejiiii_95
              </Link>
              <div className="userName">강예지</div>
            </div>
          </div>
          <div className="suggestions">
            <div className="suggestionsHeader">
              <div className="title">회원님을 위한 추천</div>
              <Link to="/" className="seeAll">
                모두 보기
              </Link>
            </div>
            <div className="suggestionsList">
              <div className="listItem">
                <Link className="listPicture" to="/">
                  <img
                    alt="mynameis20님의 프로필"
                    className="profileImg"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/29403423_2018860301734687_8265582011880570880_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=m0CvUVd59rEAX-79ddt&amp;oh=593dd7d6cb1922837ce85c1741bd7b41&amp;oe=5F515228"
                  />
                </Link>
                <div className="listDescription">
                  <Link to="/" className="suggestionsId">
                    mynameis20
                  </Link>
                  <div>
                    <span className="comment">회원님을 팔로우합니다.</span>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
              <div className="listItem">
                <Link className="listPicture" to="/">
                  <img
                    alt="mynameis20님의 프로필"
                    className="profileImg"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/29403423_2018860301734687_8265582011880570880_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=m0CvUVd59rEAX-79ddt&amp;oh=593dd7d6cb1922837ce85c1741bd7b41&amp;oe=5F515228"
                  />
                </Link>
                <div className="listDescription">
                  <Link to="/" className="suggestionsId">
                    mynameis20
                  </Link>
                  <div>
                    <span className="comment">회원님을 팔로우합니다.</span>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
              <div className="listItem">
                <Link className="listPicture" to="/">
                  <img
                    alt="mynameis20님의 프로필"
                    className="profileImg"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/29403423_2018860301734687_8265582011880570880_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=m0CvUVd59rEAX-79ddt&amp;oh=593dd7d6cb1922837ce85c1741bd7b41&amp;oe=5F515228"
                  />
                </Link>
                <div className="listDescription">
                  <Link to="/" className="suggestionsId">
                    mynameis20
                  </Link>
                  <div>
                    <span className="comment">회원님을 팔로우합니다.</span>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
              <div className="listItem">
                <Link className="listPicture" to="/">
                  <img
                    alt="mynameis20님의 프로필"
                    className="profileImg"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/29403423_2018860301734687_8265582011880570880_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=m0CvUVd59rEAX-79ddt&amp;oh=593dd7d6cb1922837ce85c1741bd7b41&amp;oe=5F515228"
                  />
                </Link>
                <div className="listDescription">
                  <Link to="/" className="suggestionsId">
                    mynameis20
                  </Link>
                  <div>
                    <span className="comment">회원님을 팔로우합니다.</span>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
              <div className="listItem">
                <Link className="listPicture" to="/">
                  <img
                    alt="mynameis20님의 프로필"
                    className="profileImg"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/29403423_2018860301734687_8265582011880570880_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=m0CvUVd59rEAX-79ddt&amp;oh=593dd7d6cb1922837ce85c1741bd7b41&amp;oe=5F515228"
                  />
                </Link>
                <div className="listDescription">
                  <Link to="/" className="suggestionsId">
                    mynameis20
                  </Link>
                  <div>
                    <span className="comment">회원님을 팔로우합니다.</span>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
            </div>
            <nav className="bottomNav">
              <ul>
                <li>
                  <Link to="/">소개</Link>
                </li>
                <li>
                  <Link to="/">．도움말</Link>
                </li>
                <li>
                  <Link to="/">．홍보센터</Link>
                </li>
                <li>
                  <Link to="/">．API</Link>
                </li>
                <li>
                  <Link to="/">．채용 정보</Link>
                </li>
                <li>
                  <Link to="/">．개인정보처리방침</Link>
                </li>
                <li>
                  <Link to="/">．약관</Link>
                </li>
                <li>
                  <Link to="/">．위치</Link>
                </li>
                <li>
                  <Link to="/">．인기계정</Link>
                </li>
                <li>
                  <Link to="/">．해시태그</Link>
                </li>
                <li>
                  <Link to="/">．언어</Link>
                </li>
              </ul>
              <span>@ 2020 INSTAGRAM FROM FACEBOOK</span>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}

export default Aside;
