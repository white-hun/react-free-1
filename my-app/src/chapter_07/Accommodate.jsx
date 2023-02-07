import React, { useState, useEffect } from "react";
import useCounter from "./useCounter"; // useCounter를 사용하여 count를 관리

const MAX_CAPACITY = 10; // count 최대 용량, 10이라는 상수로 정의

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // useEffect의 작동 방식을 확인하기위해 두 개의 useEffect를 사용
  // 첫번째 useEffect- 의존성 배열이 없는 형태
  // component가 mount된 직후 실행 되며, component가 업데이트될 때 마다 호출
  useEffect(() => {
    console.log("======================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  });

  // component가 mount된 직후 실행 되며, component가 업데이트될 때 마다 호출
  // 용량이 가득찼는지 체크하여 isFull이라는 state에 저장
  // 두번째 useEffect- 의존성 배열이 있는 형태
  // count 값이 10이된 이후에는 더 이상 변하지 않기 때문에
  // 의존성 배열에 count를 가지고 있는 두번쨰 useEffect는 실행되지 않는다
  // 의존성 배열에 있는 값이 변경될 때 실행되는 함수이기 때문이다
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  // count 갯수가 최대 용량을 초과하면 입장 버튼 비활성화
  // count 갯수가 최대 용량을 초과하면 경고 문구 출력
  return (
    <div style={{ padding: 16 }}>
      <p>{`총${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>} {/* 경고 문구 */}
    </div>
  );
}

export default Accommodate;
