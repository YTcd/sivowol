import React, { Component } from "react";
import App from "../App";
import "./lostIdPage2.css";
import Nav from "../Navbar/Nav.js";


export default class LostIdPage2 extends Component {
  render() {
    return (
        <div>
            <Nav />
        <div className="양식">
            <div className="완료문구">
               회원님의 아이디는<br/>
               asd21234<br/>
               입니다.
            </div>
            <button className="비밀번호변경">
            비밀번호 변경
            </button>
        </div>
        </div>
    );
  }
}