import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  login = (e) => {
    e.preventDefault();
    if (this.state.id === "wecode00@gmail.com" && this.state.pw === "777777") {
      this.props.history.push("/main-hwichan");
    } else {
      alert("입력하신 정보가 맞지 않습니다.");
    }
    fetch("http://10.58.2.58:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      handleChange,
      state: { id, pw },
    } = this;
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
                onChange={handleChange}
                name="id"
              />
            </div>
            <div className="userInfoArea userPwArea">
              <input
                className="write writePW"
                type="password"
                placeholder="비밀번호"
                onChange={handleChange}
                name="pw"
              />
            </div>
            <button
              className={
                id.includes("@") && pw.length >= 5
                  ? "buttonActive"
                  : "justButton"
              }
              onClick={this.login}
            >
              <div className="loginBtn">로그인</div>
            </button>
          </form>
          <div>
            <Link to="/">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
