import React, { useState ,Component } from 'react';
import './App.css';


import Nav from "./Navbar/Nav.js";
import LoginPage2 from "./loginPage2/loginPage2.js";
import Test1 from "./test/Test1.js";
import Test2 from "./test/Test2.js";
import LoginPage3 from "./loginpage3/loginPage3.js";
import GooglePixel2 from "./GooglePixel2/GooglePixel2.js";
import LostIdPage1 from "./lostIdPage1/lostIdPage1.js";
import LostIdPage2 from "./lostIdPage2/lostIdPage2.js";
import LostPWPage1 from "./lostPWPage1/lostPWPage1.js";
import LostPWPage2 from "./lostPWPage2/lostPWPage2.js";
import LostPWPage3 from "./lostPWPage3/lostPWPage3.js";



export default class App extends Component {
  render() {
    return (
      <div>
          <div>
            <Test1 />
          </div>
      </div>
    );
  }
}