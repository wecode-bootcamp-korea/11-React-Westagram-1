import React, { Component } from "react";
import "../../../styles/reset.scss";
import "../../../styles/common.scss";
import "../Main/Main.scss";
import "./Login.scss";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginBtn: "",
      idChecked: false,
      pwChecked: false,
      btnColor: "#b2dffc",
    };
  }

  handleUsername = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangeInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  idInputCheck = (event) => {
    this.setState({ email: event.target.value });
    if (event.target.value.includes("@")) {
      this.setState({ idChecked: true }, () => this.handleChangeBtnColor());
    } else {
      this.setState({ idChecked: false }, () => this.handleChangeBtnColor());
    }
  };

  pwInputCheck = (event) => {
    this.setState({ password: event.target.value });
    if (event.target.value.length >= 5) {
      this.setState({ email: event.target.value, pwChecked: true }, () =>
        this.handleChangeBtnColor()
      );
    } else {
      this.setState({ pwChecked: false }, () => this.handleChangeBtnColor());
    }
  };

  handleChangeBtnColor = () => {
    if (this.state.idChecked && this.state.pwChecked) {
      this.setState({ btnColor: "#00008b" });
    } else {
      this.setState({ btnColor: "#b2dffc" });
    }
  };

  handleSubmit = () => {
    fetch("http://10.58.3.51:8000/accounts/login", {
      method: "POST",
      body: JSON.stringify({
        phone_number: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json()) //JSON body => JS
      .then((res) => console.log(res));
  };

  goToMain = () => {
    this.props.history.push("/main-daseul");
  };

  render() {
    return (
      <section className="login">
        <div className="login__image">
          {
            <img
              alt="logo"
              className="logo-img"
              src="/images/daseulsong/logo_text.png"
            />
          }
        </div>
        <div className="login__main">
          <div className="login__main__idPw">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              id="email"
              name="id"
              onChange={
                (this.handleUsername, this.handleChangeInput, this.idInputCheck)
              }
            />
            <input
              type="password"
              placeholder="비밀번호"
              id="password"
              name="pw"
              onChange={
                (this.handlePassword, this.handleChangeInput, this.pwInputCheck)
              }
            />
          </div>
          <button
            type="button"
            id="loginBtn"
            style={{ backgroundColor: this.state.btnColor }}
            onClick={() => {
              this.handleSubmit();
              this.handleChangeBtnColor();
              this.goToMain();
            }}
            onChange={this.onChange}
          >
            로그인
          </button>
        </div>
        <div className="login__footer">
          <Link to="/login-daseul">비밀번호를 잊으셨나요?</Link>
        </div>
      </section>
    );
  }
}

export default Login;
