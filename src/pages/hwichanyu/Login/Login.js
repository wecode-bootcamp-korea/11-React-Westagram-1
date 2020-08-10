import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginHwichan extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  getValueAndGoToMain = () => {
    console.log(this.state.id, this.state.pw);
    this.props.history.push("/main-hwichan");
  };

  getValId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  getValPw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="loginContainer">
          <img src="images/hwichanyu/logo_text.png" alt="instaLogoImg" />
          <form>
            <div className="userInfoArea">
              <input
                className="write writeID"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.getValId}
              />
            </div>
            <div className="userInfoArea userPwArea">
              <input
                className="write writePW"
                type="password"
                placeholder="비밀번호"
                onChange={this.getValPw}
              />
            </div>
            {console.log(this.state)}
            <button
              className={
                this.state.id.includes("@") && this.state.pw.length >= 5
                  ? "buttonActive"
                  : "justButton"
              }
              onClick={this.getValueAndGoToMain}
            >
              <div className="loginBtn">로그인</div>
            </button>
          </form>
          <div>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginHwichan);

{
  /* disabled={this.state.id ? "false" : "trues"} */
}
