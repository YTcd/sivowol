import React, { Component } from "react";
import App from "../App";
import "./lostPWPage2.css";
import Nav from "../Navbar/Nav.js";

export default class LostPWPage2 extends Component {
    render() {
      return (
        <div>
            <div className="형식">
                <div className="상단바">
                    <button className="searchID">아아디 찾기</button>
                    <button className="searchPW">비밀번호 변경</button>
                </div>
                <div className="ctx">
                    <div>
                    <input className="텍스트필드" type="text" placeholder="이름" />
                    </div>
                    <div>
                        <div className="표기">
                            6자리 이상의 숫자를 입력해주세요
                        </div>
                    </div>
                    <div>
                    <input className="텍스트필드" type="text" placeholder="이메일" />
                    </div>
                </div>
                <div className="bot">
                    <div>
                        <button className="다음">
                            다음
                        </button>
                    </div>
                    <div>
                        회원정보가 일치하지 않습니다. {/*  추가 */}
                    </div>
                </div>
            </div>
        </div>
      )
    }
}