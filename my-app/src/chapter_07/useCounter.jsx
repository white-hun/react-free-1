import React, { useState } from "react";

// 초기 count 값을 파라미터로 받아서 count라는 이름의 state를 생성하여 값을 제공
// count 증가 및 감소를 편리하게할 수 있도록 함수를 제공 하는 Hook
// initialValue=초기값
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
  // Math.max로 0밑으로 값이 내려가지 못하게함
  // count -1 에서 0사이에 가장 큰숫자 출력
  // 감소하는 카운터라서 count에서 -1 한 후에 -1한 값과 2번쨰 인자 사이에 가장 큰숫자를 출력

  return [count, increaseCount, decreaseCount];
}

export default useCounter;

// useCounter를 사용하면 어떤 함수에서든 카운터기능을 쉽게 사용할 수 있다
