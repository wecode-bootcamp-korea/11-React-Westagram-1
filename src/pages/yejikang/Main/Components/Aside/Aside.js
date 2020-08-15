import React from "react";
import { Link } from "react-router-dom";
import { getData } from "../../../RemoteDataSource.js";
import SuggestionListItem from "../SuggestionListItem/SuggestionListItem";
import "./Aside.scss";

class Aside extends React.Component {
  constructor() {
    super();

    this.state = {
      suggestionData: [],
    };
  }

  componentDidMount = () => {
    getData("MockSuggestionData.json", (res) => {
      this.setState({
        suggestionData: res.data,
      });
    });
  };

  render() {
    const { suggestionData } = this.state;
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
            <>
              {suggestionData.map((el) => {
                return (
                  <SuggestionListItem
                    key={el.id}
                    id={el.id}
                    comment={el.comment}
                    image={el.image}
                  ></SuggestionListItem>
                );
              })}
            </>
            <nav className="bottomNav">
              <ul>
                <li>
                  <Link to="/">소개 </Link>
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
