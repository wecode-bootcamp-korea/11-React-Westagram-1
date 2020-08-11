import React from "react";
import { Link } from "react-router-dom";

class Aside extends React.Component {
  render() {
    return (
      <div className="main_right">
        <div className="user_container">
          <div className="profile_image_container">
            <Link to="#">
              <img
                alt="profile_image"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/46667604_2237749169793267_945848138990616576_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=aXZvBJNSiT8AX8YgoHT&amp;oh=efddbe46865859e0a76405ec66625077&amp;oe=5F4DE0E9"
              />
            </Link>
          </div>
          <div className="user_info_container main_user">
            <button className="nickname">dongho_223</button>
            <div className="username">김동호</div>
          </div>
        </div>
        <div className="recommendation_containter">
          <div className="recommendation_text">
            <span>회원님을 위한 추천</span>
            <button className="show_all_button">모두 보기</button>
          </div>
          <div className="recommended_users">
            <div className="recommended_user">
              <div className="user_container">
                <div className="profile_image_container">
                  <Link to="#">
                    <img
                      alt=" profile_image"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68686926_369409437318048_4482937965638582272_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=77HqimOvT_MAX9I9ZRY&oh=5d2a59befa9a563e1a11cfadf0f4694c&oe=5F4E5614"
                    />
                  </Link>
                </div>
                <div className="user_info_container">
                  <button className="nickname">seo_5oo</button>
                  <div className="description">
                    haeeeunnnii님 외 1명이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="follow_button">팔로우</button>
            </div>
            <div className="recommended_user">
              <div className="user_container">
                <div className="profile_image_container">
                  <Link to="#">
                    <img
                      alt=" profile_image"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68686926_369409437318048_4482937965638582272_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=77HqimOvT_MAX9I9ZRY&oh=5d2a59befa9a563e1a11cfadf0f4694c&oe=5F4E5614"
                    />
                  </Link>
                </div>
                <div className="user_info_container">
                  <button className="nickname">seo_5oo</button>
                  <div className="description">
                    haeeeunnnii님 외 1명이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="follow_button">팔로우</button>
            </div>
            <div className="recommended_user">
              <div className="user_container">
                <div className="profile_image_container">
                  <Link to="#">
                    <img
                      alt=" profile_image"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68686926_369409437318048_4482937965638582272_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=77HqimOvT_MAX9I9ZRY&oh=5d2a59befa9a563e1a11cfadf0f4694c&oe=5F4E5614"
                    />
                  </Link>
                </div>
                <div className="user_info_container">
                  <button className="nickname">seo_5oo</button>
                  <div className="description">
                    haeeeunnnii님 외 1명이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="follow_button">팔로우</button>
            </div>
            <div className="recommended_user">
              <div className="user_container">
                <div className="profile_image_container">
                  <Link to="#">
                    <img
                      alt=" profile_image"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68686926_369409437318048_4482937965638582272_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=77HqimOvT_MAX9I9ZRY&oh=5d2a59befa9a563e1a11cfadf0f4694c&oe=5F4E5614"
                    />
                  </Link>
                </div>
                <div className="user_info_container">
                  <button className="nickname">seo_5oo</button>
                  <div className="description">
                    haeeeunnnii님 외 1명이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="follow_button">팔로우</button>
            </div>
            <div className="recommended_user">
              <div className="user_container">
                <div className="profile_image_container">
                  <Link to="#">
                    <img
                      alt=" profile_image"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68686926_369409437318048_4482937965638582272_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=77HqimOvT_MAX9I9ZRY&oh=5d2a59befa9a563e1a11cfadf0f4694c&oe=5F4E5614"
                    />
                  </Link>
                </div>
                <div className="user_info_container">
                  <button className="nickname">seo_5oo</button>
                  <div className="description">
                    haeeeunnnii님 외 1명이 팔로우합니다
                  </div>
                </div>
              </div>
              <button className="follow_button">팔로우</button>
            </div>
          </div>
        </div>
        <div className="info_container">
          <nav className="info_nav">
            <ul>
              <li>
                <Link
                  to="https://about.instagram.com/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link to="https://help.instagram.com/">도움말</Link>
              </li>
              <li>
                <Link to="https://about.instagram.com/blog/">홍보 센터</Link>
              </li>
              <li>
                <Link to="/developer/">API</Link>
              </li>
              <li>
                <Link to="/about/jobs/">채용 정보</Link>
              </li>
              <li>
                <Link to="/legal/privacy/">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/legal/terms/">약관</Link>
              </li>
              <li>
                <Link to="/explore/locations/">위치</Link>
              </li>
              <li>
                <Link to="/directory/profiles/">인기 계정</Link>
              </li>
              <li>
                <Link to="/directory/hashtags/">해시태그</Link>
              </li>
              <li>
                <span className="language_option">
                  언어
                  <select className="select_language">
                    <option value="af">Afrikaans</option>
                    <option value="cs">Čeština</option>
                    <option value="da">Dansk</option>
                    <option value="de">Deutsch</option>
                    <option value="el">Ελληνικά</option>
                    <option value="en">English</option>
                    <option value="es">Español (España)</option>
                    <option value="es-la">Español</option>
                    <option value="fi">Suomi</option>
                    <option value="fr">Français</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="it">Italiano</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="ms">Bahasa Melayu</option>
                    <option value="nb">Norsk</option>
                    <option value="nl">Nederlands</option>
                    <option value="pl">Polski</option>
                    <option value="pt-br">Português (Brasil)</option>
                    <option value="pt">Português (Portugal)</option>
                    <option value="ru">Русский</option>
                    <option value="sv">Svenska</option>
                    <option value="th">ภาษาไทย</option>
                    <option value="tl">Filipino</option>
                    <option value="tr">Türkçe</option>
                    <option value="zh-cn">中文(简体)</option>
                    <option value="zh-tw">中文(台灣)</option>
                    <option value="bn">বাংলা</option>
                    <option value="gu">ગુજરાતી</option>
                    <option value="hi">हिन्दी</option>
                    <option value="hr">Hrvatski</option>
                    <option value="hu">Magyar</option>
                    <option value="kn">ಕನ್ನಡ</option>
                    <option value="ml">മലയാളം</option>
                    <option value="mr">मराठी</option>
                    <option value="ne">नेपाली</option>
                    <option value="pa">ਪੰਜਾਬੀ</option>
                    <option value="si">සිංහල</option>
                    <option value="sk">Slovenčina</option>
                    <option value="ta">தமிழ்</option>
                    <option value="te">తెలుగు</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="zh-hk">中文(香港)</option>
                    <option value="bg">Български</option>
                    <option value="fr-ca">Français (Canada)</option>
                    <option value="ro">Română</option>
                    <option value="sr">Српски</option>
                    <option value="uk">Українська</option>
                  </select>
                </span>
              </li>
            </ul>
          </nav>
          <span className="copyright">© 2020 Instagram from Facebook</span>
        </div>
      </div>
    );
  }
}

export default Aside;
