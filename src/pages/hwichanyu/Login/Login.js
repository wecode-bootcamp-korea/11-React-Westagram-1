import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  confirmValAndGoToMain = (e) => {
    e.preventDefault();
    if (this.state.id === "wecode00@gmail.com" && this.state.pw === "777777") {
      this.props.history.push("/main-hwichan");
      console.log("id : " + this.state.id, "/ pw : " + this.state.pw);
    } else {
      alert("입력하신 정보가 맞지 않습니다.");
    }
    fetch("http://10.58.3.218:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((res) => res.json()) // json body => js
      .then((res) => console.log(res));
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
            <button
              className={
                this.state.id.includes("@") && this.state.pw.length >= 5
                  ? "buttonActive"
                  : "justButton"
              }
              onClick={this.confirmValAndGoToMain}
            >
              <div className="loginBtn">로그인</div>
            </button>
          </form>
          <div>
            <a href="/">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
