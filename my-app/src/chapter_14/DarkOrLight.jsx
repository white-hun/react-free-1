import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

// MainContent를 자식으로 하는 컴포넌트
function DarkOrLight(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }, [theme]);

  // MainContent를 ThemeContext로 감싸서
  // ThemeContext의 값을 하위 컴포넌트들이 사용할 수 있도록 함
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
