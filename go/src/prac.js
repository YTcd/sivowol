import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var [글제목,글제목변경] = useState('남자 코트 추천');
  var [블로그제목,뀽] = useState('개발브록');

  var [like,likec] = useState(0);

  function 제목변경(){
    글제목변경('여자 코트 변경');
  }

  var posts = '꺄앙';

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {color:'blue', fontSize : '30px'} }> 블로그제목 </div>
      </div>
      
      <button onClick={ ()=> 글제목변경(글제목='여자 코트 추천')}>여코변</button>
      <button onClick={ 제목변경}>여코변</button>


      <div className="list">
        <h3> {글제목} </h3>
        <p>아연습중</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {posts} <span onClick={ ()=> likec(like+1) }>★</span> { like } </h3>
        <p>아연습중</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {posts} </h3>
        <p>아연습중</p>
        <hr/>
      </div>
          
      <Modal></Modal>
      
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
