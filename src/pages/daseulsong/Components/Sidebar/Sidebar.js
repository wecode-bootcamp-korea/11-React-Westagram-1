import React, { Component } from "react";
import "../../../../styles/common.scss";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagName: [
        "소개",
        "도움말",
        "홍보 센터",
        "API",
        "채용 정보",
        "개인정보처리방침",
        "약관",
        "위치",
        "인기 계정",
        "해시태그",
        "언어",
      ],
      // account: [{"배열이름": "배열값", "배열이름2": "배열값2", "배열이름3": "배열값3" }],
      storyImgSrc: [
        "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/116471741_2451918528436071_3403925877115793886_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ChLig_-k9rwAX9-3Jng&oh=ad469588fee992ce0159af40fb60691a&oe=5F4A8827",
        "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/43913375_249044715959605_1668311000236949504_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=pl_eGaftj4kAX-ad4us&oh=cca0f205830e88371f237b908294341e&oe=5F4C7626",
        "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/80319706_631139287713292_159190102378020864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=m0iyU1DREJQAX9TYmri&oh=d52ec427e622493193e52ca79d9c4bac&oe=5F4C926D",
      ],
      storyAccountId: ["fishror23", "junghyunjoo", "khut0814"],
      storyUploadTime: ["2시간 전", "1시간 전", "13분 전"],
      recommendImgSrc: [
        "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79372017_982952902089876_2421393426365808640_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RgJSMmqD5FQAX_NwDEA&oh=6430af1753e8525e229eeadfee642cf8&oe=5F4B5AD2",
        "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73407386_436742847280516_7688568694854647808_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IZYaDgxMbOEAX-2BfiZ&oh=658e71a12ed01bf35d46a16fa2e2b217&oe=5F4C592C",
        "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/106037679_2848193468745887_5705878449882075021_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ktJOHlgSWskAX-Y01ju&oh=1a28a1defdd31b8fa07b7a77affe3023&oe=5F4AF2FA",
      ],
      recommendAccountId: ["tjskdiw32", "trueman89", "smileday.wj"],
    };
  }

  render() {
    return (
      <div>
        <aside className="main__right">
          <ul>
            <li>
              <div className="author">
                <img
                  alt="author-image"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/101538364_247245499886357_4704375428469489664_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=6StllSwEDLUAX9VeDb0&oh=22e16107791e80cfdc5ff5dde09cfe29&oe=5F504E73"
                />
                <div className="account">
                  <span className="account__id">daseulsongme</span>
                  <span className="account__name">Daseul</span>
                </div>
              </div>
            </li>
            <li>
              <div className="story">
                <div className="story__title">
                  <span className="story__title--grey">스토리</span>
                  <span className="seeAll">모두 보기</span>
                </div>
                <ul className="account__list">
                  {this.state.storyImgSrc.map((_src, index) => {
                    const storyAccountId = this.state.storyAccountId[index];
                    const storyUploadTime = this.state.storyUploadTime[index];
                    return (
                      <>
                        <li className="account">
                          <img alt="user-story" src={_src} />
                          <div className="account__info">
                            <span className="account__id">
                              {storyAccountId}
                            </span>
                            <span className="account__time">
                              {storyUploadTime}
                            </span>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <div className="recommend">
                <div className="recommend__title">
                  <span className="recommend__title--grey">
                    회원님을 위한 추천
                  </span>
                  <span className="seeAll">모두 보기</span>
                </div>
                <ul className="account__list">
                  {this.state.recommendImgSrc.map((_src, index) => {
                    const recommendAccountId = this.state.recommendAccountId[
                      index
                    ];
                    return (
                      <>
                        <li className="account">
                          <img alt="user-recommendation" src={_src} />
                          <div className="account__info">
                            <span className="account__id">
                              {recommendAccountId}
                            </span>
                            <span className="account__follow">
                              회원님을 팔로우합니다
                            </span>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <div className="description">
                <ul className="description__tag">
                  <li>
                    {this.state.tagName.map((_tagName) => {
                      return (
                        <>
                          <Link to="/main-daseul">{_tagName}</Link>
                          <span>&middot;</span>
                        </>
                      );
                    })}
                  </li>
                </ul>
                <div className="rights">© 2020 INSTAGRAM FROM FACEBOOK</div>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
