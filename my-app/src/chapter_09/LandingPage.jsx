import React, { useState } from "react";
import Toolbar from "./Toolbar";

// LandingPage 함수 컴포넌트
// useState Hook을 사용하여
// 사용자의 로그인 여부를 자체적으로 관리
// 값을 Toolbar 컴포넌트에 전달
// 로그인 여부에 따라 Toolbar에 적절한 사용자 인터페이스가 출력되도록 한다
function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
      <div style={{ padding: 16 }}>React study with Soaple!</div>
    </div>
  );
}

export default LandingPage;
