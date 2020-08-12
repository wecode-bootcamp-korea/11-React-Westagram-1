import React, { Component } from "react";
import "./Mainright.scss";

class Mainright extends Component {
  render() {
    return (
      <div className="MainRight">
        <div className="myInfo">
          <div className="myPicture">
            <img
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/116289030_321167502592742_4100080970323231700_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Jq_35SEDSc4AX8qYahW&oh=6326ca81fbb1406a94412b732b0b7254&oe=5F4F0654"
              alt="userProfile"
            />
          </div>
          <div className="profileLine">
            <a href="/" className="userEngName">
              hwichan_
            </a>
            <div className="userKorName">유휘찬</div>
          </div>
        </div>
        <div className="recommend">
          <div className="forUserRecommend">
            <div className="forUserRecoText">회원님을 위한 추천</div>
            <div className="seeAllText">모두 보기</div>
          </div>
          <div className="recoList">
            <div className="eachRecolist">
              <a href="/">
                <img
                  className="listImg"
                  alt="userProfile"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c182.0.1075.1075a/s640x640/116412810_401384744156128_5633750130647066660_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=ZkCuqfSOycMAX-kH-c_&oh=f4f3e730f0c9d14226a787920e8e4567&oe=5F4F5248"
                />
              </a>
              <div className="recoS">
                <div className="recos">
                  <div className="recoName">bently_continental</div>
                  <div className="otherUserStatus">회원님을 팔로우합니다</div>
                </div>
                <div className="followBtn">팔로우</div>
              </div>
            </div>
          </div>
          <div className="recoList">
            <div className="eachRecolist">
              <a href="/">
                <img
                  className="listImg"
                  alt="userProfile"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/70499573_749230752196885_6850008770198634496_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=krXRR1FbcaUAX9gfbgx&oh=0198020733955e035a1aef92ce417095&oe=5F4BDA7E"
                />
              </a>
              <div className="recoS">
                <div className="recos">
                  <div className="recoName">Go_bogyeol</div>
                  <div className="otherUserStatus">회원님을 팔로우합니다</div>
                </div>
                <div className="followBtn">팔로우</div>
              </div>
            </div>
          </div>
          <div className="recoList">
            <div className="eachRecolist">
              <a href="/">
                <img
                  className="listImg"
                  alt="userProfile"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/46842135_1186417114854208_5929908567450656087_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=y08YCcsRMRQAX8guT_V&oh=19e3d1a4f50c0442141d79592e7a4233&oe=5F4DB6B1"
                />
              </a>
              <div className="recoS">
                <div className="recos">
                  <div className="recoName">Taeri__kim</div>
                  <div className="otherUserStatus">인기</div>
                </div>
                <div className="followBtn">팔로우</div>
              </div>
            </div>
          </div>
          <div className="recoList">
            <div className="eachRecolist">
              <a href="/">
                <img
                  className="listImg"
                  alt="userProfile"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/116217345_310808676710232_5616037559847868878_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=BzwxkoFfp-wAX-duKW_&oh=6a69f7baa28da9d4b28ca505f84e6257&oe=5F4DB806"
                />
              </a>
              <div className="recoS">
                <div className="recos">
                  <div className="recoName">Ya_옹</div>
                  <div className="otherUserStatus">인기</div>
                </div>
                <div className="followBtn">팔로우</div>
              </div>
            </div>
          </div>
          <div className="recoList">
            <div className="eachRecolist">
              <a href="/">
                <img
                  className="listImg"
                  alt="userProfile"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/116570555_120632519458153_8458083622452562729_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=SRBBU-f4MUsAX9tPKbF&oh=59ed2aeae368b343c2eb63fe1b637840&oe=5F4D14CC"
                />
              </a>
              <div className="recoS">
                <div className="recos">
                  <div className="recoName">everything'sGonnaBeOkay</div>
                  <div className="otherUserStatus">인기</div>
                </div>
                <div className="followBtn">팔로우</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <ul>
            <li>소개</li>
            <li>도움말</li>
            <li>홍보 센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침</li>
          </ul>
          <ul>
            <li>약관</li>
            <li>위치</li>
            <li>인기 계정</li>
            <li>해시태그</li>
            <li className="lastAboutLi">언어</li>
          </ul>
          <ul className="version">
            <li className="lastAboutLi">© 2020 INSTAGRAM FROM FACEBOOK</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Mainright;
