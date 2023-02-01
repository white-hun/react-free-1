import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  //초기 count 값을 파라미터로 받아서 count라는 이름의 state를 생성하여 값을 제공
  //count 증가 및 감소를 편리하게할 수 있도록 함수를 제공 하는 Hook

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;

// useCounter를 사용하면 어떤 함수에서든 카운터기능을 쉽게 사용할 수 있다
