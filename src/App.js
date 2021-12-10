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

  function addPost() {
    let titleCopy = [...title];
    let goodCopy = [...good];
    goodCopy.unshift(0);
    titleCopy.unshift(inputTemp);
    titleModify(titleCopy);
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

      <div className="publish">
        <input
          id="titleData"
          onChange={(e) => {
            tempModify(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            const $input = e.target.previousSibling;
            addPost();
            $input.value = "";
          }}
        >
          저장
        </button>
      </div>

      <Profile></Profile>

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

// react legacy syntax
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "kim" };
  }

  render() {
    return (
      <div>
        <h3>this is profile</h3>
        <p>i'm {this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "park" });
          }}
        >
          바꾸기
        </button>
      </div>
    );
  }
}

export default App;
