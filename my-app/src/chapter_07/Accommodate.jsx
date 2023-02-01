import React, { useState, useEffect } from "react";
import useCounter from "./useCounter"; // useCounter를 사용하여 count를 관리

const MAX_CAPACITY = 10; // count 최대 용량

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // component가 mount된 직후 실행 되며, component가 업데이트될 때 마다 업데이트
  useEffect(() => {
    console.log("====================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`); // count 갯수가 최대 용량을 초과하면 경고 문구 출력
  });

  // component가 mount된 직후 실행 되며, component가 업데이트될 때 마다 업데이트
  // 용량이 가득찼는지 체크하여 isFull이라는 state에 저장
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

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
