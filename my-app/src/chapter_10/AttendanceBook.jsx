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
