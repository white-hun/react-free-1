import React from "react";

// 초기값을 별도로 설정하지 않음
// 개발자 도구에서 context의 이름을 확인하기 위해
// ThemeContext에 displayName을 설정
const ThemeContext=  React.createContext();
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;