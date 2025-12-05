import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

/**
 * 클릭하면 값이 올라가는 버튼을 만들어보자.
 * 값은 let, const, state에 할당해서 테스트해볼것 (콘솔에 찍어보기)
 * 그리고 버튼의 대표적인 속성들이 무엇이 있는지 살펴볼것
 */
function App() {
  let count = 0;

  return (
    <>
      <span>{count}</span>
      <div className="card">
        <button
          onClick={() => {
            count++;
            console.log(count); // 콘솔에서는 증가함
          }}
        >
          +
        </button>
        {/* <Button>+</Button> */}
      </div>
    </>
  );
}

export default App;
