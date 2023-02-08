import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

// Toolbar 함수 컴포넌트
// 사용자의 로그인 여부를 나타내는 isLoggedIn이라는 값을  props로 받아서
// 조건부 렌더링을 사용해서 환영메세지를 표시하거나 감추고
// 로그인, 로그아웃 버튼을 보여주는 함수
function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  // &&연산자 와 3항 연산자를 사용하여
  // 각각
  // Inline if (login 상태(isLoggedIn)가 true이면 'Welcome'메세지 출력)
  // Inline if-else (login 상태(isLoggedIn)가 true이면 Logout버튼 출력, false이면 Login 버튼 출력)
  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>Welcome!</span>}

      {isLoggedIn ? <button onClick={onClickLogout}>Logout</button> : <button onClick={onClickLogin}>Login</button>}
    </div>
  );
}

export default Toolbar;
