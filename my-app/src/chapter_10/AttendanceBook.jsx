import React from "react";
import { useState } from "react";

const students = [
  {
    id: 1,
    name: "white",
  },
  {
    id: 2,
    name: "green",
  },
  {
    id: 3,
    name: "blue",
  },
  {
    id: 4,
    name: "red",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}> {student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;

//-----------------------------------------------------------

// // props로 숫자배열인 numbers를 받는다
// // 이를 목록으로 출력
// function NumberList(props) {
//     const {numbers} = props
//     const listItems = numbers.map((number) =>
//         <li>{number}</li>
//     )
//     return(
//         <ul>{listItems}</ul>
//     );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById("root")
// );
