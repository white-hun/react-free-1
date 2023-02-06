import React from "react";
import Book from "./Book";

// Library 컴포넌트
// 3개의 Book 컴포넌트를 렌더링
function Library(props) {
  // Book 컴포넌트 3개를 각 컴포넌트마다의 props 값을 받아 출력(return)
  return (
    <div>
      <Book name="처음 만난 JS" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 React" numOfPage={500} />
    </div>
  );
}

export default Library;
