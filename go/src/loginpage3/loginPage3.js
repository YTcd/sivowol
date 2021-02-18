import React, { Component } from "react";
import App from "../App";
import "./loginPage3.css";
import Nav from "../Navbar/Nav.js";

export default class LoginPage3 extends Component {
  render() {
    return (
        <div>
            <div className="형식">
              <div className="Name">
                  <input className="텍스트필드" type="text" placeholder="이름" />
               </div>
                <div className="생년월일앞자리">
                   <input className="생년월일" type="text" placeholder="생년월일" />
                   <input className="앞자리" type="text" placeholder="앞자리" />
               </div>

               <div className="글자">
                    8자리로 작성. ex)951123
               </div>

               <div>
                   <input className="텍스트필드" type="text" placeholder="ID" />
                </div>

                <div className="글자">
                    6자리이상 영문,숫자 혼합으로 작성.<br />
                    중복된아이디입니다 {/*후에 변경*/}
                </div>

                <div>
                    <input className="텍스트필드" type="text" placeholder="PW (6자리 이상)" />
                </div>

                <div className="글자">
                    6자리 영문,숫자 혼합으로 작성.
                </div>

                <div>
                    <input className="텍스트필드" type="text" placeholder="PW 확인" />
                </div>

                <div className="글자">
                    비밀번호를 올바르게 입력해주세요.{/*후에 변경*/}
                </div>

                <div>
                    <input className="텍스트필드" type="text" placeholder="닉네임" />
                </div>

                <div className="글자">
                    중복된 닉네임입니다.{/*후에 변경*/}
                </div>

                <div>
                    <input className="텍스트필드" type="text" placeholder="소속기관" />
                </div>

                <div className="글자">
                소속기관을 정확히 적어주세요
                </div>

                <div>
                    <input className="텍스트필드" type="text" placeholder="이메일" />
                </div>

                <div className="파일첨부">
                *비밀번호 변경시 사용됩니다.<br/>
                파일첨부
                </div>

                <button>회원가입</button>
            </div>
        </div>
    );
  }
}