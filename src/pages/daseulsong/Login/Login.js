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
  handleChangeInputId = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangeInputPw = (event) => {
    this.setState({ password: event.target.value });
  };

  /* handleChangeInputPw = (event) => {         --리팩토링: 위의 두 개의 이벤트를 한 이벤트로 처리하기
    this.setState({ [event.target.id]: event.target.value }); -- id는 line 64, 73에 해당
                        ㄴ자바스크립트 객체 접근자
  };
*/
  handleChangeButton = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = () => {
    // event.preventDefault(); -> 키이벤트에는 괜찮지만 클릭이벤트에는 걸 필요없다
    // const email = event.target.id.value; -> (target으로 인해)버튼에만 적용됨
    // const password = event.target.pw.value; -> (target으로 인해)버튼에만 적용됨
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
    // const { id } = this.state.email;
    // const { pw } = this.state.password;
    // const pwArr = pw.split();

    // for(value of id.split('')){
    //     if (value.includes('@') && pwArr.length >= 6) {
    //       this.setState({ loginBtn.style.backgroundColor == 'darkblue'});
    //     } else {
    //       alert('id 값에는 "@"가 포함되어야 하고, password는 5글자 이상 입력 해야합니다.');
    //     }
    // }
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

  // goToMain = (event) => {
  //   if (event.message === "valid user") {
  //     this.props.history.push("/signup");
  //   } else {
  //     alert("The username you entered doesn't belong to an account. Please check your username and try again.");
  //   }
  //   this.props.history.push("/main");
  // };

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
                // this.handleChangeInputId(e, "email");
                this.idInputCheck
              }
              // value={this.state.email}
            />
            <input
              type="password"
              placeholder="비밀번호"
              id="password"
              name="pw"
              onChange={
                // this.handleChangeInputPw(e, "password");
                this.pwInputCheck
              }
              //value={this.state.password} -> 입력하면 자동으로 value 값이 저장됨
            />
          </div>
          <button
            type="button"
            id="loginBtn"
            style={{ backgroundColor: this.state.btnColor }}
            // className={
            //   this.state.id.length >= 5 && this.state.pw.length >= 5
            //     ? "button active"
            //     : "button inactive"
            // }
            onClick={() => {
              this.handleSubmit();
              this.handleChangeBtnColor();
              this.goToMain();
            }}
            onChange={this.onChange}
            // disabled={!this.state.value}
          >
            로그인
          </button>
        </div>
        <div className="login__footer">
          <Link to="/login-daseul">비밀번호를 잊으셨나요?</Link>
        </div>
        {/* </div> */}
      </section>
    );
  }
}

export default Login;
