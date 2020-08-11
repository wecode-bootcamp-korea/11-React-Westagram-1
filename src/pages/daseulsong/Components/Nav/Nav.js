import React, { Component } from "react";
import "../../../../styles/common.scss";
import "./Nav.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav__container">
            <ul className="logo">
              <li>
                <img alt="logo" src="/images/daseulsong/logo.png" />
              </li>
            </ul>
            <div className="search">
              <input type="text" placeholder="검색" className="search__bar" />
              <span className="search__glass">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <ul className="icons">
              <div className="icons__list">
                <li>
                  <img
                    alt="icon-home"
                    src="https://www.pinclipart.com/picdir/big/381-3811668_png-file-svg-instagram-home-icon-vector-clipart.png"
                  />
                </li>
                <li>
                  <button className="icons__list selected">
                    <img
                      alt="icon-message"
                      src="https://static.thenounproject.com/png/3084968-200.png"
                    />
                    <span className="icons__count">7</span>
                  </button>
                </li>
                <li>
                  <img
                    alt="icon-explore"
                    src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519779-90_Compass-512.png"
                  />
                </li>
                <li>
                  <img alt="icon-follow" src="/images/daseulsong/heart.png" />
                </li>
                <li className="icon__list--account">
                  <img
                    alt="author-image"
                    width="30px"
                    height="30px"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/101538364_247245499886357_4704375428469489664_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=6StllSwEDLUAX9VeDb0&oh=22e16107791e80cfdc5ff5dde09cfe29&oe=5F504E73"
                  />
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
