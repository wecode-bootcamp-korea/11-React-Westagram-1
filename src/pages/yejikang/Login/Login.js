import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      pw: "",
      id: "",
      disabled: true,
    };
  }

  goToMain = () => {
    this.props.history.push("/main");
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSummit = () => {
    fetch("http://10.58.4.11:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => sessionStorage.setItem("access_token", res.access_token));
    // .then((res) => console.log(res)); //회원가입
  };

  render() {
    const { id, pw } = this.state;
    const enabled = id.includes("@") && pw.length >= 5;

    return (
      <div className="Login">
        <div className="main">
          <div className="loginContainer">
            <div className="logo">
              <img alt="instagram" src="/images/donghokim/logo_text.png" />
            </div>
            <div className="loginForm">
              <div className="inputWrapper">
                <input
                  type="text"
                  className="userId"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="inputWrapper">
                <input
                  type="password"
                  className="userPw"
                  placeholder="비밀번호"
                  name="pw"
                  value={this.state.pw}
                  onChange={this.handleInputChange}
                />
              </div>
              <button
                className="loginBtn"
                onClick={this.handleSummit}
                disabled={!enabled}
              >
                로그인
              </button>
              <div className="lostPassword">
                <Link to="/">비밀번호를 잊으셨나요?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
