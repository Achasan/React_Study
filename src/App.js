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
    "스타트업 들어가는 법",
  ]);
  let [modal, modalModify] = useState(false);
  let [good, goodModify] = useState([0, 1, 2]);
  let [postIndex, postIndexModify] = useState(0);
  let [inputTemp, tempModify] = useState("");

  function increaseGood(index) {
    let goodCopy = [...good];
    goodCopy[index] += 1;
    goodModify(goodCopy);
  }

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

      {title.map((title, index) => {
        return (
          <List
            index={index}
            title={title}
            good={good[index]}
            postIndexModify={postIndexModify}
            increaseGood={increaseGood}
            month={month}
            day={day}
          ></List>
        );
      })}

      <input
        onChange={(e) => {
          tempModify(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          modalModify(!modal);
        }}
      >
        글 보기
      </button>

      {modal ? <Modal title={title[postIndex]}></Modal> : null}
    </div>
  );
}

// list component
const List = (props) => {
  return (
    <div className="list">
      <h4
        onClick={() => {
          props.postIndexModify(props.index);
        }}
      >
        {props.title}
        <span
          onClick={() => {
            props.increaseGood(props.index);
          }}
        >
          👍
        </span>
        <span>{props.good}</span>
        {/* {<button onClick={changeTitle}>title change</button>} */}
      </h4>
      <p>
        {props.month}월 {props.day}일 발행
      </p>
      <hr />
    </div>
  );
};

// modal component
function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 : {props.title}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
