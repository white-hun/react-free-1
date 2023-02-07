import React, { Profiler } from "react";
import Comment from "./comment";

const comments = [
  {
    name: "white",
    comment: "Hello, I'm white",
  },
  {
    name: "Karina",
    comment: "Keep up the good work",
  },
  {
    name: "Sana",
    comment: "You did great",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
