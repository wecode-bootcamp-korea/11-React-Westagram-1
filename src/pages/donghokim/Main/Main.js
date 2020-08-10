import React from "react";
import "./Main.scss";
import Storybar from "./Storybar";
import Feed from "./Components/Feed";
import Aside from "./Components/Aside";
import Navbar from "./Components/Navbar";

class Main extends React.Component {
  render() {
    return (
      <div className="main_root">
        <main>
          <section>
            <div className="contents_container">
              <Storybar />
              <div className="article_container">
                <Feed />
                <Feed />
              </div>
            </div>
            <Aside />
          </section>
        </main>
        <Navbar />
      </div>
    );
  }
}

export default Main;
