import React from "react";
import { withRouter } from "react-router-dom";
import { isIdHasAtAndPasswordMinFive } from "../_utils/validationFunctions";
import "./Login.scss";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    buttonStatus: true,
  };

  goToMain = () => {
    console.log(this.props);
    this.props.history.push("/main-dongho");
  };

  updateInputs = (inputName, inputValue) => {
    this.setState(
      (state) => ({ [inputName]: inputValue }),
      this.changeButtonStatus
    );
  };

  changeButtonStatus = () => {
    this.setState({
      buttonStatus: !isIdHasAtAndPasswordMinFive(
        this.state.username,
        this.state.password
      ),
    });
  };

  render() {
    return (
      <div className="login_root">
        <main>
          <article>
            <div className="demo_container">
              <div className="image_frame">
                <img
                  alt="demo"
                  className="demo_image"
                  src="https://instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
                />
                <img
                  alt="demo"
                  className="demo_image"
                  src="https://instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg"
                />
                <img
                  alt="demo"
                  className="demo_image"
                  src="https://instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg"
                />
                <img
                  alt="demo"
                  className="demo_image"
                  src="https://instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg"
                />
                <img
                  alt="demo"
                  className="demo_image"
                  src="https://instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"
                />
              </div>
            </div>
            <div className="interaction_container">
              <div className="login_container">
                <div className="logo">
                  <img
                    alt="instagram"
                    className="logo_image"
                    src="/images/donghokim/logo_text.png"
                  />
                </div>
                <div className="form_container">
                  <form
                    action="#"
                    className="login_form"
                    onChange={({ target }) =>
                      this.updateInputs(target.name, target.value)
                    }
                  >
                    <div className="input_container">
                      <label className="label_container">
                        <span className="placeholder">
                          전화번호, 사용자 이름 또는 이메일
                        </span>
                        <input
                          type="text"
                          name="username"
                          maxLength="75"
                          autoCapitalize="off"
                          autoComplete="off"
                        />
                      </label>
                    </div>
                    <div className="input_container">
                      <label className="label_container">
                        <span className="placeholder">비밀번호</span>
                        <input
                          type="password"
                          name="password"
                          autoCapitalize="off"
                          autoComplete="off"
                        />
                      </label>
                      <div className="password_mode">
                        <div className="button_wrapper">
                          <button>숨기기</button>
                        </div>
                      </div>
                    </div>
                    <div className="login_button">
                      <button
                        disabled={this.state.buttonStatus}
                        onClick={this.goToMain}
                      >
                        로그인
                      </button>
                    </div>
                    <div className="or">
                      <div className="vertical_line"></div>
                      <div className="or_text">또는</div>
                      <div className="vertical_line"></div>
                    </div>
                    <div className="alternative_login">
                      <button className="facebook_login">
                        <span className="spriteFacebook"></span>
                        <span className="login_text">Facebook으로 로그인</span>
                      </button>
                    </div>
                    <a
                      className="find_password"
                      href="https://instagram.com/accounts/password/reset/"
                    >
                      비밀번호를 잊으셨나요?
                    </a>
                  </form>
                </div>
              </div>
              <div className="signup_container">
                <div className="text_container">
                  <p className="signup_text">
                    "계정이 없으신가요? "
                    <a href="https://instagram.com/accounts/emailsignup/">
                      가입하기
                    </a>
                  </p>
                </div>
              </div>
              <div className="download_container">
                <p className="download_text">앱을 다운로드 하세요</p>
                <div className="download_links">
                  <a
                    className="image_link"
                    href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
                  >
                    <img
                      alt="App Store에서 이용 가능"
                      src="https://instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                    />
                  </a>
                  <a
                    className="image_link"
                    href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB83B8986-2F09-4ADA-A7C4-6935A556139E%26utm_content%3Dlo%26utm_medium%3Dbadge"
                  >
                    <img
                      alt="Google Play에서 이용 가능"
                      src="https://instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>

        <footer>
          <div className="info_container">
            <nav className="info_nav">
              <ul>
                <li>
                  <a
                    href="https://about.instagram.com/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    소개
                  </a>
                </li>
                <li>
                  <a href="https://help.instagram.com/">도움말</a>
                </li>
                <li>
                  <a href="https://about.instagram.com/blog/">홍보 센터</a>
                </li>
                <li>
                  <a href="/developer/">API</a>
                </li>
                <li>
                  <a href="/about/jobs/">채용 정보</a>
                </li>
                <li>
                  <a href="/legal/privacy/">개인정보처리방침</a>
                </li>
                <li>
                  <a href="/legal/terms/">약관</a>
                </li>
                <li>
                  <a href="/explore/locations/">위치</a>
                </li>
                <li>
                  <a href="/directory/profiles/">인기 계정</a>
                </li>
                <li>
                  <a href="/directory/hashtags/">해시태그</a>
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
        </footer>
      </div>
    );
  }
}

export default withRouter(Login);
