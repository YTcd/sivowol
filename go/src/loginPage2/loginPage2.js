import React, { Component } from "react";
import App from "../App";
import "./loginPage2.css";
import Nav from "../Navbar/Nav.js";

export default class Loginpage2 extends Component {
  render() {
    return (
        <div>
          <Nav />
          <div className="약관동의">
            약관동의
          </div>
          <div className="약관">
              실제약관
          </div>
          <div className="동의">
            <span className="뀨"></span>
            <input type="checkbox" />
              <button>동의합니다.</button>
          </div>
        </div>
    );
  }
}