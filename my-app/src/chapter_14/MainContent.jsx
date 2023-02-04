import {useContext} from "react";
import ThemeContext from "./ThemeContext";

// 설정된 현재 테마값을 받아와서
// 실제 화면에 컨텐츠를 렌더링
function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    // 테마 변경 버튼을 누를 경우
    // ThemeContext로 부터 받은 toggleTheme 함수를 호출하여
    // ThemeContext의 값을 변경하는 역할
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
            }}
        >
            <p>Hello, Wedsite Changing theme</p>
            <button onClick={toggleTheme}>change theme</button>
        </div>
    );
}

export default MainContent;

//------------------------------
