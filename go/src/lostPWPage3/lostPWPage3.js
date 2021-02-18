import React, { Component } from "react";
import "./lostPWPage3.css";
import Nav from "../Navbar/Nav.js";


export default class LostPWPage3 extends Component {
  render() {
    return (
        <div>
        <div className="양식">
            <div className="완료문구">
               비밀번호 변경이 완료되었습니다.
            </div>
            <div className="로그인하기">
                로그인하기.
            </div>
        </div>
        </div>
    );
  }
}