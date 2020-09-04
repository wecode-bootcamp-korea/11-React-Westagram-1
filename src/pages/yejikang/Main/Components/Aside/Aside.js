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
      helpData: [
        { name: "소개", link: "/main-yeji" },
        { name: "도움말", link: "/main-yeji" },
        { name: "홍보센터", link: "/main-yeji" },
        { name: "API", link: "/main-yeji" },
        { name: "채용정보", link: "/main-yeji" },
        { name: "개인정보처리방침", link: "/main-yeji" },
        { name: "약관", link: "/main-yeji" },
        { name: "위치", link: "/main-yeji" },
        { name: "인기계정", link: "/main-yeji" },
        { name: "해시태그", link: "/main-yeji" },
        { name: "언어", link: "/main-yeji" },
      ],
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
    const { suggestionData, helpData } = this.state;
    return (
      <aside className="Aside">
        <div className="profileContainer">
          <Link to="http://" className="userImg picture__link/">
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
          <ul>
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
          </ul>
          <nav className="bottomNav">
            <ul>
              {helpData.map((el) => {
                return (
                  <li>
                    <Link to={el.link}>{el.name}</Link>
                  </li>
                );
              })}
            </ul>
            <span>@ 2020 INSTAGRAM FROM FACEBOOK</span>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Aside;
