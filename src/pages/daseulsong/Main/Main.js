import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";
import "./Main.scss";
import Nav from "../Components/Nav/Nav";
import Feed from "../Components/Feed/Feed";
import Sidebar from "../Components/Sidebar/Sidebar";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Link to="/main-daseul"></Link>
        <Nav />
        <div className="main">
          <div className="main__container">
            <Feed />
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
