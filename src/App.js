/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let [title, titleModify] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "스타트업 들어가는 법"
  ]);

  let [modal, modalModify] = useState(false);

  let [good, goodModify] = useState(0)

  // function changeTitle() {
  //   let newArray = [...title]; // title Array 깊은 복사
  //   newArray[0] = '여자 코트 추천';
  //   titleModify(newArray);
  // };

  return (
    <div className="App">
      <div className="black-nav">
        <div>AchaSan</div>
      </div>
      <div className="list">
        <h4>
          {title[0]} 
          <span>👍</span> 
          <span>{good}</span>
          {/* <button onClick={changeTitle}>title change</button> */}
        </h4>
        <p>
          {month}월 {day}일 발행
        </p>
        <hr />
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>
          {month}월 {day}일 발행
        </p>
        <hr />
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>
          {month}월 {day}일 발행
        </p>
        <hr />
      </div>

      <button onClick={ () => {modal ? modalModify(false) : modalModify(true)} }>글 쓰기</button>

      {modal ? <Modal></Modal> : null}

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
