import React, { Component } from "react";
import "../../../../styles/common.scss";
import "./Feed.scss";
import { Link } from "react-router-dom";

class Feed extends Component {
  render() {
    return (
      <div>
        <div className="feeds">
          <div className="account__container">
            <div className="account">
              <img
                alt="author-image"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/101538364_247245499886357_4704375428469489664_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=6StllSwEDLUAX9VeDb0&oh=22e16107791e80cfdc5ff5dde09cfe29&oe=5F504E73"
              />
              <div className="account__info">
                <span className="account__id">daseulsongme</span>
                <span className="account__location">Meißen, Germany</span>
              </div>
            </div>
            <div className="moreBtn">
              <img
                alt="more-btn"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </div>
          <div className="mainImg-container">
            <div className="mainImg-container__img">
              <img
                alt="main-img"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/24126641_312049249282777_4540700581370527744_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=OjJPOV-S6MoAX--XUik&oh=48edd76f44a21e9e577db76ef992b756&oe=5F50EB73"
                className="mainImage"
              />
            </div>
          </div>
          <div className="info">
            <div className="info__content">
              <ul className="icons">
                <div className="icon-list__left">
                  <li className="icon__list">
                    <span className="icon__list--red">
                      <i className="fas fa-heart"></i>
                    </span>
                  </li>
                  <li className="icon__list">
                    <i className="far fa-comment"></i>
                  </li>
                  <li className="icon__list">
                    <i className="far fa-paper-plane"></i>
                  </li>
                </div>
                <li className="icon__list--right">
                  <i className="far fa-bookmark"></i>
                </li>
              </ul>
              <div className="like">
                <img
                  alt="user-like"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/102638893_2477296745828548_255469383460355571_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=2AyKfCfhd3YAX_CgjeM&oh=d5babe7e21f3733de18a8be086b325ab&oe=5F523ECE"
                />
                <span>caomei101님 외 7명이 좋아합니다</span>
              </div>
              <ul className="metadata">
                <li>
                  <span className="metadata__userName">daseulsongme</span>
                </li>
                <li>
                  <span>"Liebeskummer...💔 "</span>
                </li>
                <li>
                  <span className="seeMore">더 보기</span>
                </li>
              </ul>
            </div>
            <div className="comment__container">
              <div className="infoComment">
                <div className="contentLeft">
                  <span className="contentId">natalie.zikmundova</span>
                  <span className="contentText">
                    Ich werde auf dich als reifere und verbesserte Person
                    warten.
                  </span>
                </div>
                <span className="contentHeart">
                  <i className="far fa-heart"></i>
                </span>
              </div>
            </div>
            <span className="uploadTime">54분 전</span>
            <section className="comment">
              <textarea
                placeholder="댓글 달기..."
                className="comment-box"
              ></textarea>
              <Link className="postBtn" to="/main-daseul">
                게시
              </Link>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
