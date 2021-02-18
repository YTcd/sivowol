import React, { Component } from "react";
import "./GooglePixel2.css";
import Nav from "../Navbar/Nav.js";


export default class GooglePixel2 extends Component {
  render() {
    return (
        <div>
            <Nav />
        <div className="양식">
            <div className="완료문구">
               회원가입이 완료되었습니다.
            </div>
            <div className="로그인하기">
                로그인하기.
            </div>
        </div>
        </div>
    );
  }
}