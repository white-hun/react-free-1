import React, { useState } from "react";
import Toolbar from "./Toolbar";

// LandingPage 함수 컴포넌트
// useState Hook을 사용하여
// 사용자의 로그인 여부를 자체적으로 관리
// 초기값은 false로 logout의 상태(Login 버튼을 출력한다)
// 값을 Toolbar 컴포넌트에 전달
function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // login 버튼을 클릭하면 익명함수 실행
  // login 상태를 true로 저장(Logout 버튼을 출력)
  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  // logout 버튼을 클릭하면 익명함수 실행
  // login 상태를 false로 저장(Login 버튼을 출력)
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  // 로그인 여부에 따라 Toolbar에 적절한 사용자 인터페이스가 출력되도록 한다
  return (
    <div>
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
      <div style={{ padding: 16 }}>React study with Soaple!</div>
    </div>
  );
}

export default LandingPage;
