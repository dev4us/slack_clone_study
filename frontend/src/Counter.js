import React, { useState, useEffect } from "react";

const Counter = () => {
  /*
   * number라는 state를 선언
   * setNumber 라는 함수를 선언한건데, 역할은 number라는 state를 변경하는 함수
   */
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log("rendering... : )");
  });

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <>
      {number} 입니다.
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
};

export default Counter;

/*
props = 정적인 데이터를 사용할 때, 
state = 동적인 데이터를 사용할 때,

정적 & 동적 구분법
1. 렌더링이 필요한 지? (state가 변경되었을 때 수정되는 부분만 리렌더링)
*/
