import React, { Component } from "react";
import App from "../App";
import "./Nav.css";
import zoom from "./button_search.png"
import { Link } from 'react-router-dom'
import LoginPage1 from "../loginPage2/loginPage2";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="Nav">
            <div className="Navi1">
              <div className="Arrow"></div>
              <div className="agreee">약관동의</div>
            </div>
          
            <div className="Navi2">
              <a className="Navs">
                <img src={ zoom } />
              </a>
              <a className="Navs">
                ...
              </a>
            </div>
          </nav>
          
          <div className="공백"></div>
        </header>
    
      </div>
    );
  }
}