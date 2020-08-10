import React, { Component } from "react";
import Feeds from "./Feeds/Feeds";
import Mainright from "./Mainright/Mainright";
import "./Main.scss";

class Mymain extends Component {
  render() {
    return (
      <div className="Main">
        {/* <Nav></Nav> */}
        <main>
          <section className="mainFrame">
            <Feeds></Feeds>
            <Mainright></Mainright>
          </section>
        </main>
      </div>
    );
  }
}

export default Mymain;
