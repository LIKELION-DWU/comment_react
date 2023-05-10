import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김멋사",
    comments: "안녕하세요, 김멋사입니다.",
  },
  {
    name: "김솜솜",
    comments: "리액트 재미있어요~!",
  },
  {
    name: "김서진",
    comments: "저도 리액트 배워보고 싶어요!",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comments} />;
      })}
    </div>
  );
}

export default CommentList;
