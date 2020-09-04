import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: "",
      disabled: true,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSummit = () => {
    const { email, password } = this.state;
    fetch("http://10.58.4.11:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => sessionStorage.setItem("access_token", res.access_token));
  };

  goToMain = () => {
    this.props.history.push("/main-yeji");
  };

  render() {
    const { email, password } = this.state;
    const { goToMain, handleInputChange } = this;
    const enabled = email.includes("@") && password.length >= 5;

    return (
      <div className="Login">
        <div className="loginContainer">
          <div className="logo">
            <img alt="instagram" src="/images/donghokim/logo_text.png" />
          </div>
          <div className="loginForm">
            <input
              type="text"
              className="userId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              className="userPw"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <button className="loginBtn" onClick={goToMain} disabled={!enabled}>
              로그인
            </button>
            <div className="lostPassword">
              <Link to="/">비밀번호를 잊으셨나요?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
