import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let [title, modifyFuction] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "스타트업 들어가는 법",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>AchaSan</div>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
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
    </div>
  );
}

export default App;
